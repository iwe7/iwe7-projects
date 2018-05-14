import {
  LocationStrategy,
  LocationChangeListener,
  PlatformLocation
} from "@angular/common";
import { Injectable } from "@angular/core";
import { parse, stringify } from "query-string";

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
export class We7LocationStrategy extends LocationStrategy {
  _path: string;

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
  constructor(private _platformLocation: PlatformLocation) {
    super();
  }
  path(includeHash?: boolean): string {
    this._path = location.pathname;
    let re = this._path + "/" + this.queryString.do;
    return re;
  }
  prepareExternalUrl(internal: string): string {
    let _dos = internal.split("/");

    let parse = this.queryString;
    parse["do"] = _dos[_dos.length - 1];
    let newUrl = stringify(parse);
    return this._path + "?" + newUrl;
  }
  pushState(state: any, title: string, url: string, queryParams: string): void {
    let _dos = url.split("/");
    let parseObj = this.queryString;
    let _do = _dos[_dos.length - 1];
    let __dos = _do.split("?");
    parseObj["do"] = __dos[0];
    let params = parse(__dos[__dos.length - 1]);
    let newUrl = stringify({ ...parseObj, ...params });
    this._platformLocation.pushState(state, title, this._path + "?" + newUrl);
  }
  replaceState(
    state: any,
    title: string,
    url: string,
    queryParams: string
  ): void {
    let newUrl = stringify(this.queryString);
    console.dir(queryParams);
    this._platformLocation.replaceState(
      state,
      title,
      this._path + "?" + newUrl
    );
  }
  forward(): void {
    this._platformLocation.forward();
  }
  back(): void {
    this._platformLocation.back();
  }
  onPopState(fn: LocationChangeListener): void {
    this._platformLocation.onPopState(fn);
    this._platformLocation.onHashChange(fn);
  }
  getBaseHref(): string {
    this._path = this._path || "/";
    return this._path ? this._path + "" : "/";
  }
}
