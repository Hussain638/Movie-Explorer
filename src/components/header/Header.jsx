import { Group, Title } from '@mantine/core';
import NavigationLinks from './NavigationLinks';
import { color } from 'framer-motion';

const Header = () => {
  return (
    <Group justify="space-between" align="center" h="100%" px="md" style={{backgroundColor:"#1c1c1e"}}>
      <Title
        order={3}
        // sx={(theme) => ({
        //   fontSize: theme.fontSizes.xl,
        //   [theme.fn.smallerThan('sm')]: {
        //     fontSize: theme.fontSizes.lg,
        //     color:""
        //   },
        // })}
        style={{color:"#fff"}}
      >
        Movie Explorer
      </Title>
      <NavigationLinks />
    </Group>
  );
};

export default Header;