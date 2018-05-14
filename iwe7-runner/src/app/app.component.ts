import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Iwe7HttpService } from "../../../iwe7-http/src/public_api";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  constructor(public http: Iwe7HttpService, public router: Router) {
    console.log(this.http);
  }

  go(path: string) {
    this.router.navigate([path], { queryParams: { _id: "4" } });
  }
}
