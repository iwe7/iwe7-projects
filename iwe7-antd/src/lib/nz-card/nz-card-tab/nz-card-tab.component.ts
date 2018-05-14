import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";

@Component({
  selector: "nz-card-tab",
  templateUrl: "./nz-card-tab.component.html",
  styleUrls: ["./nz-card-tab.component.css"]
})
export class NzCardTabComponent {
  @ViewChild(TemplateRef) template: TemplateRef<void>;
}
