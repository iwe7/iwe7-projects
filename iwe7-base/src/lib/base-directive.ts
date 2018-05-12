import {
  OnInit,
  Injector,
  Renderer2,
  ElementRef,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from "@angular/core";
import { forEach, defaultsDeep, kebabCase } from "lodash";
import { Iwe7IcssService } from "iwe7-icss";
import { BehaviorSubject } from "rxjs";

export abstract class Iwe7BaseDirective
  implements OnInit, OnDestroy, OnChanges {
  public render: Renderer2;
  public ele: ElementRef<any>;
  public icss: Iwe7IcssService;

  // theme主题
  @Input() theme: string = "default";

  // class样式
  _classObj: { [key: string]: boolean } = {};
  @Input()
  get classObj(): { [key: string]: boolean } {
    return this._classObj;
  }
  set classObj(val: { [key: string]: boolean }) {
    this._classObj = defaultsDeep(val, this._classObj);
  }
  // style样式
  private _styleObj: { [key: string]: any } = {};
  public style$: BehaviorSubject<{ [key: string]: any }> = new BehaviorSubject(
    this._styleObj
  );
  @Input()
  set styleObj(val: { [key: string]: any }) {
    this._styleObj = defaultsDeep(val, this._styleObj);
    this.style$.next(this._styleObj);
  }
  get styleObj(): { [key: string]: any } {
    return this._styleObj;
  }

  constructor(public injector: Injector, public prefixCls: string) {
    this.render = this.injector.get(Renderer2);
    this.ele = this.injector.get(ElementRef);
    this.icss = this.injector.get(Iwe7IcssService);
    this.render.addClass(this.ele.nativeElement, this.prefixCls);
  }

  ngOnInit() {
    this.icss.init(this.style$, this.ele).subscribe(res => {});
    this.setClass();
  }

  ngOnDestroy() {}

  ngOnChanges(changes: SimpleChanges) {
    if ("classObj" in changes) {
      if (!changes.classObj.firstChange) {
        this.setClass();
      }
    }
    if ("theme" in changes) {
      this.setTheme(changes.theme);
    }
  }
  // 设置主题
  setTheme(change: SimpleChange) {
    // 移除老主题
    if (change.previousValue) {
      this.render.removeClass(
        this.ele.nativeElement,
        `${this.prefixCls}-${change.previousValue}`
      );
    }
    // 添加新主题
    if (change.currentValue) {
      this.render.addClass(
        this.ele.nativeElement,
        `${this.prefixCls}-${change.previousValue}`
      );
    }
  }
  // 设置class样式
  setClass() {
    forEach(this.classObj, (value, key) => {
      if (value) {
        this.render.addClass(
          this.ele.nativeElement,
          `${this.prefixCls}-${key}`
        );
      } else {
        this.render.removeClass(
          this.ele.nativeElement,
          `${this.prefixCls}-${key}`
        );
      }
    });
  }
}
