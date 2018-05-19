import {
  Component,
  OnInit,
  ElementRef,
  HostBinding,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  ControlValueAccessor,
  FormControl
} from "@angular/forms";
import { ClockPickerService } from "./clock-picker.service";
declare const ClockPicker: any;
declare const $: any;
@Component({
  selector: "clock-picker",
  templateUrl: "./clock-picker.component.html",
  styleUrls: ["./clock-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ClockPickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ClockPickerComponent),
      multi: true
    }
  ]
})
export class ClockPickerComponent
  implements ControlValueAccessor, OnInit, AfterViewInit {
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

  constructor(public clock: ClockPickerService, public ele: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.clock.load().subscribe(res => {
      this.instance = $(this.ele.nativeElement).clockpicker({
        placement: this.placement,
        align: this.align,
        donetext: this.donetext,
        autoclose: this.autoclose,
        default: this.default,
        vibrate: this.vibrate,
        fromnow: this.fromnow,
        init: () => {
          this.init.emit(this);
        },
        beforeShow: () => {
          this.beforeShow.emit(this);
        },
        afterShow: () => {
          this.afterShow.emit(this);
        },
        beforeHide: () => {
          this.beforeHide.emit(this);
        },
        afterHide: () => {
          this.afterHide.emit(this);
        },
        beforeHourSelect: () => {
          this.beforeHourSelect.emit(this);
        },
        afterHourSelect: () => {
          this.afterHourSelect.emit(this);
        },
        beforeDone: () => {
          this.beforeDone.emit(this);
        },
        afterDone: () => {
          this.afterDone.emit(this);
        }
      });
      const that = this;
      this.instance.find("input").change(function() {
        that._change(this.value);
      });
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

  private _change: (_: any) => {};

  public writeValue(obj: string) {
    if (obj) {
      this.default = obj;
    }
  }
  public registerOnChange(fn: any) {
    this._change = fn;
  }
  public registerOnTouched() {}
}
