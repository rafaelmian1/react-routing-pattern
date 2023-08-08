export type MapRouteParams<T, P> = P extends undefined
  ? {route: T}
  : {route: T; params: P};

export type RouteParams<T> = {
  [K in keyof T]: MapRouteParams<K, T[K]>;
}[keyof T];

export type MapRouteOptionalParams<T, P> = P extends undefined
  ? {route: T}
  : {route: T; params?: P};

export type RouteOptionalParams<T> = {
  [K in keyof T]: MapRouteOptionalParams<K, T[K]>;
}[keyof T];
