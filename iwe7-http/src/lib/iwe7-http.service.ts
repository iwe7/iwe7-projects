import { Injectable, Inject, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { parse, parseUrl, extract, stringify } from "query-string";

export interface HttpQueryString {
  m?: string;
  i?: string;
  do?: string;
  c?: string;
  eid?: string;
}
@Injectable({
  providedIn: "root"
})
export class Iwe7HttpService {
  get queryString(): HttpQueryString {
    let parseQuery = parse(location.search);
    return {
      m: parseQuery.m || "runner_open",
      do: parseQuery.do || "index",
      i: parseQuery.i || "41",
      c: parseQuery.c || "entry",
      ...parseQuery
    };
  }

  get path() {
    return isDevMode() ? 'app' : location.pathname;
  }

  get hostname() {
    return isDevMode() ? "https://meepo.com.cn/" : location.hostname;
  }
  constructor(public http: HttpClient, @Inject(DOCUMENT) public doc: Document) {
    console.log(this.queryString);
    console.log(this.path);
  }

  get(_do: string, _params: any) {
    let url = this.createUrl(_do, _params);
    return this.http.get(url);
  }

  post(_do: string, _params: any, data: any) {
    let url = this.createUrl(_do, _params);
    return this.http.post(url, data);
  }

  createUrl(_do: string, _params: any) {
    return "";
  }
}
