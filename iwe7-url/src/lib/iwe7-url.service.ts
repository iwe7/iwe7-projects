import { Injectable, Inject, InjectionToken } from "@angular/core";

export function defaultEnv() {
  return {
    root: "https://meepo.com.cn/",
    i: "41",
    m: "runner_open"
  };
}

export const ENV = new InjectionToken("ENV", {
  providedIn: "root",
  factory: defaultEnv
});
import { getUrl } from "iwe7-util";

@Injectable({
  providedIn: "root"
})
export class Iwe7UrlService {
  constructor(@Inject(ENV) private env: any) {
    const account: any = JSON.parse(localStorage.getItem("__account"));
    if (account) {
      this.env.i = account.uniacid;
    }
  }

  get root() {
    return this.env.root;
  }

  setEnvRoot(root: string) {
    this.env.root = root;
    return this;
  }

  setEnvUniacid(i: string) {
    this.env.i = i;
    return this;
  }

  getUrl(params: any = {}) {
    return getUrl(params);
  }

  getMobileUrl(_do: string, _params: any = {}) {
    _params["do"] = _do;
    _params["i"] = this.env.i;
    _params["m"] = this.env.m;
    _params["c"] = "entry";
    _params["a"] = "site";
    return `${this.env.root}app/index.php${this.getUrl(_params)}`;
  }

  getWebUrl(_do: string, _params: any = {}) {
    _params["do"] = _do;
    _params["i"] = this.env.i;
    _params["m"] = this.env.m;
    _params["c"] = "site";
    _params["a"] = "entry";
    return `${this.env.root}web/index.php${this.getUrl(_params)}`;
  }

  getOpenUrl(_open: string, _params: any = {}) {
    const url = this.getMobileUrl("open", {
      ..._params,
      ...{ open: _open }
    });
    return url;
  }

  getWebOpen(_open: string, _params: any = {}) {
    return this.getWebUrl("open", {
      ..._params,
      ...{ open: _open }
    });
  }
}
