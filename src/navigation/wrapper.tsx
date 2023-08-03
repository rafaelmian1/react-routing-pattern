import {FC} from 'react';
import {useLocation} from 'react-router-dom';

type RouteWrapperProps<T> = {
  children: FC<T>;
};

export const RouteWrapper = <T extends object>(props: RouteWrapperProps<T>) => {
  const {state} = useLocation();
  const childrenProps = state as T;

  return props.children(childrenProps);
};
