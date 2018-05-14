import { Component, Injector } from "@angular/core";
import { NzCardDirective } from "./nz-card.directive";
@Component({
  selector: "nz-card",
  templateUrl: "./nz-card.component.html",
  styleUrls: ["./nz-card.component.scss"]
})
export class NzCardComponent extends NzCardDirective {
  constructor(injector: Injector) {
    super(injector);
  }
}
