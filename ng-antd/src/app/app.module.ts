import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./iwe7-layout/src/public_api";

import { Iwe7CoreModule } from "iwe7-core";
import { Iwe7ShareModule } from "iwe7-share";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, Iwe7CoreModule, Iwe7ShareModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
