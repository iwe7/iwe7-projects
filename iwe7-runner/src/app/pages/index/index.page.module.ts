import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { IndexPage } from "./index.page";
import { AdSimpleTableModule } from '@delon/abc';
@NgModule({
  imports: [
    CommonModule,
    AdSimpleTableModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: IndexPage
      }
    ])
  ],
  exports: [],
  declarations: [IndexPage],
  providers: []
})
export class IndexPageModule {}
