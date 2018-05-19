import {
  Component,
  OnInit,
  ElementRef,
  HostBinding,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { ColokPickerService } from "./colok-picker.service";
declare const ClockPicker: any;
declare const $: any;
@Component({
  selector: "colok-picker",
  templateUrl: "./colok-picker.component.html",
  styleUrls: ["./colok-picker.component.scss"]
})
export class ColokPickerComponent implements OnInit, AfterViewInit {
  @HostBinding("class.input-group") _group: boolean = true;
  @HostBinding("class.clockpicker") _clockpicker: boolean = true;

  @Input() placement: string = "bottom";
  @Input() align: string = "left";
  @Input() autoclose: boolean = false;
  @Input() default: string = "now";
  @Input() donetext: string = "完成";
  @Input() vibrate: boolean = true;
  @Input() fromnow: number = 0;

  @Output() init: EventEmitter<any> = new EventEmitter();
  @Output() beforeShow: EventEmitter<any> = new EventEmitter();
  @Output() afterShow: EventEmitter<any> = new EventEmitter();
  @Output() beforeHide: EventEmitter<any> = new EventEmitter();
  @Output() afterHide: EventEmitter<any> = new EventEmitter();
  @Output() beforeHourSelect: EventEmitter<any> = new EventEmitter();
  @Output() afterHourSelect: EventEmitter<any> = new EventEmitter();
  @Output() beforeDone: EventEmitter<any> = new EventEmitter();
  @Output() afterDone: EventEmitter<any> = new EventEmitter();

  instance: any;

  constructor(public clock: ColokPickerService, public ele: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.clock.load().subscribe(res => {
      this.instance = $(this.ele.nativeElement).clockpicker();
    });
  }

  show() {
    this.instance.clockpicker("show");
  }

  hide() {
    this.instance.clockpicker("hide");
  }

  remove() {
    this.instance.clockpicker("remove");
  }

  toggleView() {
    this.instance.clockpicker("toggleView");
  }
}
