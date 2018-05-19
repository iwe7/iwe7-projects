import { NgModule } from "@angular/core";
import { AntdIconPickerComponent } from "./antd-icon-picker.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [AntdIconPickerComponent],
  exports: [AntdIconPickerComponent]
})
export class AntdIconPickerModule {}
