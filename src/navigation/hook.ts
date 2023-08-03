import {useNavigate} from 'react-router-dom';
import {RootNavigationParams} from './Root/def';

const makeRoute = (...route: string[]) => {
  if (typeof route === 'string') return `/${route}`;
  return `/${route.join('/')}`;
};

type NavigateFunction = <T extends keyof RootNavigationParams>(
  ...args: undefined extends RootNavigationParams[T]
    ? [rootRoute: T]
    : [rootRoute: T, params: RootNavigationParams[T]]
) => void;

export const useNavigateOnAuthorized = (): NavigateFunction => {
  const navigate = useNavigate();

  return (...args) => {
    const rootRoute = args[0];
    if (!args[1]) return navigate(rootRoute);

    const params = args[1];
    const subRoute = params && 'route' in params ? params.route ?? '' : '';
    const state = params && 'params' in params ? params.params : undefined;
    navigate(makeRoute(rootRoute, subRoute), {state});
  };
};
