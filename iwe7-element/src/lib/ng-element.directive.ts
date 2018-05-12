import {
  Directive,
  Input,
  ViewContainerRef,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { fromPromise } from "rxjs/observable/fromPromise";
import { filter, map } from "rxjs/operators";

@Directive({
  selector: "[ngElement]"
})
export class NgElementDirective implements OnInit, OnChanges {
  @Input() ngElement: string;
  constructor(private view: ViewContainerRef) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("ngElement" in changes) {
      this.createElement();
    }
  }

  private createElement() {
    fromPromise(
      customElements.whenDefined(this.ngElement).then(res => this.ngElement)
    )
      .pipe(
        map(selector => document.createElement(selector)),
        filter(res => !!res),
        map((res: any) => res.ngElementStrategy),
        filter(res => !!res),
        map(res => res.componentFactory),
        filter(res => !!res)
      )
      .subscribe(res => {
        this.view.createComponent(res);
      });
  }
}
