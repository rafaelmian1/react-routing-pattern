export type MapRouteParams<T, P> = P extends undefined
  ? {route: T}
  : {route: T; params: P};

export type RouteParams<T> = {
  [K in keyof T]: MapRouteParams<K, T[K]>;
}[keyof T];
