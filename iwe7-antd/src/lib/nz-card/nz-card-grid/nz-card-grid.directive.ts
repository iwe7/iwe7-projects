import { Directive, OnInit, Injector } from "@angular/core";
import { Iwe7BaseDirective } from "iwe7-base";

@Directive({
  selector: "[nz-card-grid]"
})
export class NzCardGridDirective extends Iwe7BaseDirective {
  constructor(injector: Injector) {
    super(injector, "nz-card-grid");
  }
}
