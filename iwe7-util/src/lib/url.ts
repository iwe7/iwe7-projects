export function serializeQueryParams(params: { [key: string]: any }): string {
  const strParams: string[] = Object.keys(params).map(name => {
    const value = params[name];
    return Array.isArray(value)
      ? value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join("&")
      : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  });
  return strParams.length ? `?${strParams.join("&")}` : "";
}

export function encodeUriQuery(s: string): string {
  return encodeUriString(s).replace(/%3B/gi, ";");
}

export function encodeUriString(s: string): string {
  return encodeURIComponent(s)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",");
}

export function getUrl(_params: any = {}) {
  return serializeQueryParams(_params);
}
