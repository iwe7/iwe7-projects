import { Injectable } from '@angular/core';
import { Iwe7UrlService } from 'iwe7-url';
import { Iwe7ScriptService } from 'iwe7-script';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AudioJsService {

  constructor(
    public url: Iwe7UrlService,
    public script: Iwe7ScriptService
  ) { }

  load(): Observable<any>{
    return this.script.load([
      `${this.url.root}addons/runner_open/assets/audiojs/audio.min.js`
    ]);
  }
}
