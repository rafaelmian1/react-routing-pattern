import {DashboardNavigationParams} from '@navigation/Dashboard/def';

type PostsPageProps = DashboardNavigationParams['Posts'] & {
  otherProp?: unknown;
};

export const PostsPage = (props: PostsPageProps) => {
  return <div>PostsPage: {JSON.stringify(props)}</div>;
};
