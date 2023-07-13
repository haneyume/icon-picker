import { useRoutes } from 'react-router-dom';

import { AppProvider } from './contexts';
import { AppLayout } from './layouts';
import {
  HomePage,
  IconAntDesignPage,
  IconBootstrapPage,
  SettingsPage,
  NotFoundPage,
} from './pages';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/icon-ant-design',
      element: <IconAntDesignPage />,
    },
    {
      path: '/icon-bootstrap',
      element: <IconBootstrapPage />,
    },
    {
      path: '/settings',
      element: <SettingsPage />,
    },
    {
      path: '/*',
      element: <NotFoundPage />,
    },
  ]);

  return (
    <AppProvider>
      <AppLayout>{routes}</AppLayout>
    </AppProvider>
  );
};
