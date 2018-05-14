import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CdkTableModule } from "@angular/cdk/table";
import { IndexPage } from "./index.page";
@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
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
