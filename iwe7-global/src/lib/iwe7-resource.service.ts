import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
  useFactory: getResource
})
export class Iwe7ResourceService {
  root: string;
  map: Map<string, any> = new Map();
  constructor() {}

  set(key: string, val: any) {
    return this.map.set(key, val);
  }

  get(key: string) {
    return this.map.get(key);
  }
}

export function getResource() {
  (<any>window).Iwe7ResourceService =
    (<any>window).Iwe7ResourceService || new Iwe7ResourceService();
  return (<any>window).Iwe7ResourceService;
}
