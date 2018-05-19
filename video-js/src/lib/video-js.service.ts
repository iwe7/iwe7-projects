import { Injectable } from "@angular/core";
import { Iwe7ScriptService } from "iwe7-script";
import { Iwe7UrlService } from "iwe7-url";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class VideoJsService {
  constructor(public url: Iwe7UrlService, public script: Iwe7ScriptService) {}

  load(): Observable<any> {
    return this.script.load([
      "https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video-js.css",
      "https://cdnjs.cloudflare.com/ajax/libs/video.js/6.7.3/video.js"
    ]);
  }
}
