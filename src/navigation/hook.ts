import {useNavigate as useNavigateHook} from 'react-router-dom';
import {RootNavigationParams} from './Root/def';

const extractRoutes = <T>(params: T, result: string[] = []): string[] => {
  if (
    params &&
    typeof params === 'object' &&
    'route' in params &&
    typeof params.route === 'string'
  ) {
    result.push(params.route);
  }
  if (params && typeof params === 'object' && 'params' in params) {
    extractRoutes(params.params, result);
  }
  return result;
};

const extractState = <T>(params: T, result: object = {}): object => {
  if (
    params &&
    typeof params === 'object' &&
    'params' in params &&
    typeof params.params === 'object'
  ) {
    result = {...result, ...params.params};
    if (params && typeof params === 'object' && 'route' in params) {
      extractState(params.params, result);
    }
  }
  return result;
};

const makeRoute = <T>(route: string, params: T) => {
  const routes = extractRoutes(params, [route]);
  return `/${routes.join('/')}`;
};

export type NavigateFunction = <T extends keyof RootNavigationParams>(
  ...args: undefined extends RootNavigationParams[T]
    ? [rootRoute: T]
    : [rootRoute: T, params: RootNavigationParams[T]]
) => void;

export const useNavigate = (): NavigateFunction => {
  const navigate = useNavigateHook();

  return (...args) => {
    const [rootRoute, base] = args;
    if (!base) return navigate(rootRoute);
    navigate(makeRoute(rootRoute, base), {state: extractState(base)});
  };
};
