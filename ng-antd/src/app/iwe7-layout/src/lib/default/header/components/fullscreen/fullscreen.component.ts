import { Component, OnInit, HostBinding, HostListener } from "@angular/core";
import * as screenfull from "screenfull";

@Component({
  selector: "header-fullscreen",
  templateUrl: "./fullscreen.component.html",
  styleUrls: ["./fullscreen.component.css"]
})
export class FullscreenComponent implements OnInit {
  @HostBinding("class.d-block") _block = true;

  status = false;

  @HostListener("window:resize")
  _resize() {
    this.status = screenfull.isFullscreen;
  }

  @HostListener("click")
  _click() {
    if (screenfull.enabled) {
      screenfull.toggle();
    }
  }
  constructor() {}

  ngOnInit() {}
}
