import { Component, OnInit } from "@angular/core";

@Component({
  selector: "index-page",
  templateUrl: "./index.page.html",
  styleUrls: ["./index.page.scss"]
})
export class IndexPage implements OnInit {
  dataSource: any[] = [{}, {}];
  myTrackById: any;

  displayedColumns = ["userId", "userName", "progress", "color"];
  constructor() {}

  ngOnInit() {}
}
