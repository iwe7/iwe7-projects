import { NgModule } from "@angular/core";
import { LocationStrategy, APP_BASE_HREF } from "@angular/common";
import { We7LocationStrategy } from "iwe7-router";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Iwe7DelonModule } from "iwe7-delon";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    Iwe7DelonModule.forRoot()
  ],
  declarations: [],
  exports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    Iwe7DelonModule
  ],
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
export class Iwe7CoreModule {}
