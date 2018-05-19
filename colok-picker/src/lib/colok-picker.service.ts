import { Injectable } from "@angular/core";
import { Iwe7UrlService } from "iwe7-url";
import { Iwe7ScriptService } from "iwe7-script";
import { switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class ColokPickerService {
  constructor(public url: Iwe7UrlService, public script: Iwe7ScriptService) {}
  load(): Observable<any> {
    const root = `${this.url.root}web/resource/`;
    return this.script.load([`${root}js/lib/jquery-1.11.1.min.js`]).pipe(
      switchMap(res => {
        return this.script.load([
          `${root}js/lib/bootstrap.min.js`,
          `${root}css/bootstrap.min.css`,
          `${root}css/common.css`
        ]);
      }),
      switchMap(res => {
        return this.script.load([
          `${root}components/clockpicker/clockpicker.min.js`,
          `${root}components/clockpicker/clockpicker.min.css`
        ]);
      })
    );
  }
}
