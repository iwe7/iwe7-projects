import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";

import { Iwe7CoreModule } from "iwe7-core";
import { Iwe7ShareModule } from "iwe7-share";

@NgModule({
  declarations: [AppComponent],
  imports: [PagesModule, Iwe7CoreModule, Iwe7ShareModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
