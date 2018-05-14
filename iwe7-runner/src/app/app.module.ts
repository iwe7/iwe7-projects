import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LocationStrategy, APP_BASE_HREF } from "@angular/common";

import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";

import { We7LocationStrategy } from "../../../iwe7-router/src/public_api";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LocationStrategy,
      useClass: We7LocationStrategy
    },
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ]
})
export class AppModule {}
