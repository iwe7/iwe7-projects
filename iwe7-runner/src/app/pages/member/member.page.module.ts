import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { CdkTableModule } from "@angular/cdk/table";
import { MemberPage } from "./member.page";
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: "",
        component: MemberPage
      }
    ])
  ],
  exports: [],
  declarations: [MemberPage],
  providers: []
})
export class MemberPageModule {}
