import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passport",
  templateUrl: "./passport.component.html"
})
export class PassportComponent implements OnInit {
  links = [
    {
      title: "帮助",
      href: ""
    },
    {
      title: "隐私",
      href: ""
    },
    {
      title: "条款",
      href: ""
    }
  ];
  constructor() {}

  ngOnInit() {}
}
