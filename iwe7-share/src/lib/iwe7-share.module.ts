import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AlainThemeModule } from "@delon/theme";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [AlainThemeModule.forChild()],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    AlainThemeModule,
    TranslateModule
  ]
})
export class Iwe7ShareModule {}
