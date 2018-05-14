import { Component, OnInit, Injector, Input, TemplateRef } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Component({
  selector: "nz-card-meta",
  templateUrl: "./nz-card-meta.component.html",
  styleUrls: ["./nz-card-meta.component.css"]
})
export class NzCardMetaComponent extends Iwe7BaseComponent {
  _title: string | TemplateRef<void>;
  isTitleString: boolean;
  _description: string | TemplateRef<void>;
  isDescriptionString: boolean;
  @Input() nzAvatar: TemplateRef<void>;

  @Input()
  set nzTitle(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  get nzTitle(): string | TemplateRef<void> {
    return this._title;
  }

  @Input()
  set nzDescription(value: string | TemplateRef<void>) {
    this.isDescriptionString = !(value instanceof TemplateRef);
    this._description = value;
  }

  get nzDescription(): string | TemplateRef<void> {
    return this._description;
  }
  constructor(injector: Injector) {
    super(injector, "nz-card-meta");
  }
}
