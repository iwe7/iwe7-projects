import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { NzCardModule } from "../../../iwe7-antd/src/public_api";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NzCardModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
