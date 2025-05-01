import { AppShell } from '@mantine/core';
import Header from '../header/Header';

const AppLayout = ({ children }) => {
  return (
    <AppShell
      m={0}
      header={{ height: 60 }}
      padding={0} // Changed from "md" to 0
      styles={(theme) => ({
        root: {
          width: '100%',
          margin: 0,
          padding: 0,
        },
        main: {
          width: '100%',
          margin: 0,
          padding: 0,
          // backgroundColor: theme.colorScheme ===  theme.colors.gray[0],
        },
      })}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main m={0}>
        {/* If you need padding inside the content area, add it here */}
        <div style={{
          width: '100%',
          padding: '16px',
          boxSizing: 'border-box'
        }}>
          {children}
        </div>
      </AppShell.Main>
    </AppShell>
  );
};

export default AppLayout;