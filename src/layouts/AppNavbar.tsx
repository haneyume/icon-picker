import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Navbar, NavLink, Badge, Stack, Tooltip } from '@mantine/core';
import { IconIcons } from '@tabler/icons-react';

export const AppNavbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const links = [
    {
      icon: IconIcons,
      label: 'Tabler Icons',
      path: '/',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Ant Design',
      path: '/icon-ant-design',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Bootstrap',
      path: '/icon-bootstrap',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Feather',
      path: '/icon-feather',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Font Awesome 5',
      path: '/icon-font-awesome-5',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Font Awesome 6',
      path: '/icon-font-awesome-6',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Material Design',
      path: '/icon-material-design',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'Simple Line',
      path: '/icon-simple-line',
      notifications: 0,
    },
    {
      icon: IconIcons,
      label: 'VS Code',
      path: '/icon-vs-code',
      notifications: 0,
    },
  ];

  return (
    <Navbar width={{ base: 250 }}>
      <Navbar.Section>
        <Stack className="my-5" spacing={5}>
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <Tooltip key={index} label={t(link.label)} position="bottom">
                <NavLink
                  icon={<Icon size={18} />}
                  label={t(link.label)}
                  onClick={() => navigate(link.path)}
                  active={link.path === window.location.pathname}
                  rightSection={
                    link.notifications > 0 && (
                      <Badge size="sm" variant="filled">
                        {link.notifications}
                      </Badge>
                    )
                  }
                />
              </Tooltip>
            );
          })}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};
