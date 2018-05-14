import {
  Directive,
  Injector,
  HostBinding,
  Input,
  ContentChild,
  TemplateRef
} from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";
import { NzCardTabComponent } from "./nz-card-tab/nz-card-tab.component";
import { toBoolean } from "iwe7-util";
@Directive({
  selector: "[nz-card]"
})
export class NzCardDirective extends Iwe7BaseDirective {
  _bordered = true;
  _loading = false;
  _hoverable = false;
  _title: string | TemplateRef<void>;
  _extra: string | TemplateRef<void>;
  isTitleString: boolean;
  isExtraString: boolean;
  @ContentChild(NzCardTabComponent) tab: NzCardTabComponent;
  @Input() nzBodyStyle: { [key: string]: string };
  @Input() nzCover: TemplateRef<void>;
  @Input() nzActions: Array<TemplateRef<void>> = [];
  @Input() nzType: string;

  @Input()
  set nzTitle(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  get nzTitle(): string | TemplateRef<void> {
    return this._title;
  }

  @Input()
  set nzExtra(value: string | TemplateRef<void>) {
    this.isExtraString = !(value instanceof TemplateRef);
    this._extra = value;
  }

  get nzExtra(): string | TemplateRef<void> {
    return this._extra;
  }

  @HostBinding("class.ant-card-type-inner")
  get isInner(): boolean {
    return this.nzType === "inner";
  }

  @HostBinding("class.ant-card-contain-tabs")
  get isTabs(): boolean {
    return !!this.tab;
  }

  @Input()
  @HostBinding("class.ant-card-bordered")
  set nzBordered(value: boolean) {
    this._bordered = toBoolean(value);
  }

  get nzBordered(): boolean {
    return this._bordered;
  }

  @Input()
  set nzLoading(value: boolean) {
    this._loading = toBoolean(value);
  }

  get nzLoading(): boolean {
    return this._loading;
  }

  @Input()
  @HostBinding("class.ant-card-hoverable")
  set nzHoverable(value: boolean) {
    this._hoverable = toBoolean(value);
  }

  get nzHoverable(): boolean {
    return this._hoverable;
  }
  constructor(injector: Injector) {
    super(injector, "nz-card");
  }
}
