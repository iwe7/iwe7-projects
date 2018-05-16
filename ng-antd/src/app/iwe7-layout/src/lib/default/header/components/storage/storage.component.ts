import { Component, OnInit, HostBinding, HostListener } from "@angular/core";
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: "header-storage",
  templateUrl: "./storage.component.html",
  styleUrls: ["./storage.component.css"]
})
export class StorageComponent implements OnInit {
  @HostBinding("class.d-block") _block: true;
  constructor(
    private confirmServ: NzModalService,
    private messageServ: NzMessageService
  ) {}

  ngOnInit() {}

  @HostListener("click")
  _click() {
    this.confirmServ.confirm({
      nzTitle: "Make sure clear all local storage?",
      nzOnOk: () => {
        localStorage.clear();
        this.messageServ.success("Clear Finished!");
      }
    });
  }
}
