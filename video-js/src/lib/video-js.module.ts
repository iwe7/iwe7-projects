import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VideoJsComponent } from "./video-js.component";

@NgModule({
  imports: [CommonModule],
  declarations: [VideoJsComponent],
  exports: [VideoJsComponent]
})
export class VideoJsModule {}
