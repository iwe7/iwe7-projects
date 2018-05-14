import { Component, OnInit, Injector } from "@angular/core";
import { Iwe7BaseComponent } from "iwe7-base";

@Component({
  selector: "nz-card-loading",
  templateUrl: "./nz-card-loading.component.html",
  styleUrls: ["./nz-card-loading.component.css"]
})
export class NzCardLoadingComponent extends Iwe7BaseComponent {
  constructor(injector: Injector) {
    super(injector, "ant-card-loading-content");
  }
}
