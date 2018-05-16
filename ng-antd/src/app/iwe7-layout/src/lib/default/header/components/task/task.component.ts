import { Component, OnInit } from "@angular/core";

@Component({
  selector: "header-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  loading = true;

  change() {
    setTimeout(() => (this.loading = false), 500);
  }
}
