import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
  useFactory: getGlobal
})
export class Iwe7GlobalService {
  map: Map<string, any> = new Map();
  constructor() {}

  set(key: string, val: any) {
    return this.map.set(key, val);
  }

  get(key: string) {
    return this.map.get(key);
  }
}

export function getGlobal() {
  (<any>window).Iwe7GlobalService =
    (<any>window).Iwe7GlobalService || new Iwe7GlobalService();
  return (<any>window).Iwe7GlobalService;
}
