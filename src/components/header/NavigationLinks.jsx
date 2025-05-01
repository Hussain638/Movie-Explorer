import { Group, Button } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

const NavigationLinks = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/watchlist', label: 'Watchlist' },
  ];

  return (
    <Group>
      {links.map((link) => (
        <Button
          key={link.to}
          variant={location.pathname === link.to ? 'light' : 'subtle'}
          component={Link}
          to={link.to}
        >
          {link.label}
        </Button>
      ))}
    </Group>
  );
};

export default NavigationLinks;