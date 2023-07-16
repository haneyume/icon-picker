import { useRoutes } from 'react-router-dom';

import { AppProvider } from './contexts';
import { AppLayout } from './layouts';
import {
  HomePage,
  IconAntDesignPage,
  IconBootstrapPage,
  IconFeatherPage,
  IconFontAwesome5Page,
  IconFontAwesome6Page,
  IconMaterialDesignPage,
  IconSimpleLinePage,
  IconVSCodePage,
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
      path: '/icon-feather',
      element: <IconFeatherPage />,
    },
    {
      path: '/icon-font-awesome-5',
      element: <IconFontAwesome5Page />,
    },
    {
      path: '/icon-font-awesome-6',
      element: <IconFontAwesome6Page />,
    },
    {
      path: '/icon-material-design',
      element: <IconMaterialDesignPage />,
    },
    {
      path: '/icon-simple-line',
      element: <IconSimpleLinePage />,
    },
    {
      path: '/icon-vs-code',
      element: <IconVSCodePage />,
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
