import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ColorPickerService } from './color-picker.service';
declare const $: any;
@Directive({
  selector: '[colorPicker]',
  exportAs: 'colorPicker'
})
export class ColorPickerDirective implements OnInit {
  @Input() color: string = '#ccc';
  @Input() flat: boolean = false;
  @Input() showInput: boolean = false;
  @Input() showInitial: boolean = true;
  @Input() allowEmpty: boolean = true;
  @Input() showAlpha: boolean = true;
  @Input() disabled: boolean = false;
  @Input() localStorageKey: string = 'color-picker';
  @Input() showPalette: boolean = false;
  @Input() showPaletteOnly: boolean = false;
  @Input() togglePaletteOnly: boolean = false;
  @Input() showSelectionPalette: boolean = false;
  @Input() clickoutFiresChange: boolean = false;

  @Input() cancelText: string = '取消';
  @Input() chooseText: string = '选择';
  @Input() togglePaletteMoreText: string = '展开';
  @Input() togglePaletteLessText: string = '关闭';
  @Input() containerClassName: string;
  @Input() replacerClassName: string;
  @Input() preferredFormat: string;
  @Input() maxSelectionSize: number;
  @Input() palette: any;
  @Input() selectionPalette: string[];

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Output() onMove: EventEmitter<any> = new EventEmitter();
  @Output() onHide: EventEmitter<any> = new EventEmitter();
  @Output() onShow: EventEmitter<any> = new EventEmitter();
  @Output() onBeforeShow: EventEmitter<any> = new EventEmitter();
  @Output() onDragStart: EventEmitter<any> = new EventEmitter();
  @Output() onDragStop: EventEmitter<any> = new EventEmitter();

  instance: any;
  constructor(
    public colorService: ColorPickerService,
    public ele: ElementRef,
  ) {}

  ngOnInit() {
    this.colorService.load().subscribe(res => {
      this.instance = $(this.ele.nativeElement).spectrum({
        color: this.color,
        flat: this.flat,
        showInput: this.showInput,
        showInitial: this.showInitial,
        allowEmpty: this.allowEmpty,
        showAlpha: this.showAlpha,
        disabled: this.disabled,
        localStorageKey: this.localStorageKey,
        showPalette: this.showPalette,
        showPaletteOnly: this.showPaletteOnly,
        showSelectionPalette: this.showSelectionPalette,
        clickoutFiresChange: this.clickoutFiresChange,
        cancelText: this.cancelText,
        chooseText: this.chooseText,
        togglePaletteMoreText: this.togglePaletteMoreText,
        togglePaletteLessText: this.togglePaletteLessText,
        containerClassName: this.containerClassName,
        replacerClassName: this.replacerClassName,
        preferredFormat: this.preferredFormat,
        maxSelectionSize: this.maxSelectionSize,
        palette: this.palette,
        selectionPalette: this.selectionPalette,
      });
      $(this.ele.nativeElement).on('change', (color: any) => {
        this.onChange.emit(color);
      });
      $(this.ele.nativeElement).on('move', (color: any) => {
        this.onMove.emit(color);
      });
      $(this.ele.nativeElement).on('hide', (color: any) => {
        this.onHide.emit(color);
      });
      $(this.ele.nativeElement).on('show', (color: any) => {
        this.onHide.emit(color);
      });
      $(this.ele.nativeElement).on('beforeShow', (color: any) => {
        this.onBeforeShow.emit(color);
      });
      $(this.ele.nativeElement).on('dragstop.spectrum', (color: any) => {
        this.onDragStop.emit(color);
      });
      $(this.ele.nativeElement).on('dragstart.spectrum', (color: any) => {
        this.onDragStart.emit(color);
      });
    });
  }

  show() {
    return this.instance.spectrum('show');
  }

  hide() {
    return this.instance.spectrum('hide');
  }

  toggle() {
    return this.instance.spectrum('toggle');
  }

  get() {
    return this.instance.spectrum('get');
  }

  set(color: any) {
    return this.instance.spectrum('set', color);
  }

  container() {
    return this.instance.spectrum('container');
  }

  reflow() {
    return this.instance.spectrum('reflow');
  }

  destroy() {
    return this.instance.spectrum('destroy');
  }

  enable() {
    return this.instance.spectrum('enable');
  }

  disable() {
    return this.instance.spectrum('disable');
  }

  getOption(key: string) {
    return this.instance.spectrum('option', key);
  }

  setOption(key: string, value: any) {
    return this.instance.spectrum('option', key, value);
  }
}
