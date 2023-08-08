import {FC} from 'react';
import {useLocation} from 'react-router-dom';
import {useNavigate, NavigateFunction} from './hook';

type RouteWrapperProps<T> = {
  children: FC<{params: T; navigate: NavigateFunction}>;
};

export const RouteWrapper = <T extends object>(props: RouteWrapperProps<T>) => {
  const {state: params} = useLocation();
  const navigate = useNavigate();
  return props.children({params, navigate});
};
