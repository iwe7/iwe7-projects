import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { TranslateModule } from "@ngx-translate/core";

// delon
import { AlainThemeModule } from "@delon/theme";
import { DelonACLModule } from "@delon/acl";
import { DelonFormModule } from "@delon/form";

import { AdReuseTabModule } from '@delon/abc';
import { DelonABCModule } from '@delon/abc';

@NgModule({
  imports: [AlainThemeModule.forChild(), TranslateModule],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    AlainThemeModule,
    TranslateModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    AdReuseTabModule
  ]
})
export class Iwe7ShareModule {}
