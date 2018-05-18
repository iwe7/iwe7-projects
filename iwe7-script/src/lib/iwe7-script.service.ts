import { Injectable, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { Subject, forkJoin, from, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class Iwe7ScriptService {
  private loaded = false;
  private list: any = {};

  constructor(@Inject(DOCUMENT) public doc: any) { }

  load(path: string[]) {
    const ob: Observable<any>[] = [];
    path.map(res => {
      if (res.indexOf('.css') > -1) {
        ob.push(this.loadCss(res))
      }
      if (res.indexOf('.js') > -1) {
        ob.push(this.loadScript(res));
      }
    });
    return forkJoin(...ob);
  }

  loadScript(path: string): Observable<any> {
    return Observable.create(observer => {
      if (this.list[path] === true) {
        observer.next(<any>{
          path: path,
          loaded: true,
          status: "Loaded"
        });
        observer.complete();
      } else {
        this.list[path] = true;
        const node = this.doc.createElement("script");
        node.type = "text/javascript";
        node.src = path;
        node.charset = "utf-8";
        if ((<any>node).readyState) {
          (<any>node).onreadystatechange = () => {
            if (
              (<any>node).readyState === "loaded" ||
              (<any>node).readyState === "complete"
            ) {
              (<any>node).onreadystatechange = null;
              observer.next(<any>{
                path: path,
                loaded: true,
                status: "Loaded"
              });
              observer.complete();
            }
          };
        } else {
          node.onload = () => {
            observer.next(<any>{
              path: path,
              loaded: true,
              status: "Loaded"
            });
            observer.complete();
          };
        }
        node.onerror = (error: any) =>
          observer.error(<any>{
            path: path,
            loaded: false,
            status: "Loaded"
          });
        document.getElementsByTagName("head")[0].appendChild(node);
      }
    });
  }

  loadCss(path: string): Observable<any> {
    return Observable.create(observer => {
      if (this.list[path] === true) {
        observer.next(<any>{
          path: path,
          loaded: true,
          status: 'Loaded'
        });
      } else {
        this.list[path] = true;
        let node = document.createElement('link');
        node.rel = 'stylesheet';
        node.type = 'text/css';
        node.href = path;
        document.getElementsByTagName('head')[0].appendChild(node);
        observer.next(<any>{
          path: path,
          loaded: true,
          status: 'Loaded'
        });
      }
    });
  }
}
