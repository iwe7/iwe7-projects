import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.css"]
})
export class IconComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loading = true;

  change() {
    setTimeout(() => (this.loading = false), 500);
  }
}
