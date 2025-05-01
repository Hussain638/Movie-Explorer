import { Title, SimpleGrid, Text, Container, Stack, Paper, Center, Box, Group } from '@mantine/core';
import { useWatchlistStore } from '../store/WatchlistStore';
import WatchlistCard from '../components/WatchlistCard';

export default function Watchlist() {
  const watchlist = useWatchlistStore(state => state.watchlist);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
        padding: '16px',  // Add padding here if needed
        boxSizing: 'border-box',
      }}
    >
     <Container
  size="100%"
  px={0}
  mt="75px"
  sx={{
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    padding: 0,
  }}
>
        {/* <Paper
          shadow="xl"
          radius="md"
          p={{ base: 'xs', sm: 'md', md: 'lg' }}
          withBorder
          sx={(theme) => ({
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(10px)',
            [theme.fn.smallerThan('sm')]: {
              padding: theme.spacing.xs,
            },
          })}
        > */}
          <Stack 
            spacing={{ base: 'md', sm: 'lg', md: 'lg' }}
            align="stretch"
            justify="flex-start"
          >
            <Group position="center">
              <Title
                order={2}
                sx={(theme) => ({
                  fontSize: '2.4rem',
                  textAlign: 'center',
                  color: theme.colors.blue[8],
                  [theme.fn.smallerThan('sm')]: {
                    fontSize: '1.8rem',
                  },
                  [theme.fn.smallerThan('xs')]: {
                    fontSize: '1.5rem',
                  },
                })}
              >
                My Watchlist
              </Title>
            </Group>

            {watchlist.length === 0 ? (
              <Center >
                <Text 
                  sx={(theme) => ({
                    fontSize: theme.fontSizes.lg,
                    [theme.fn.smallerThan('sm')]: {
                      fontSize: theme.fontSizes.md,
                    },
                  })}
                  color="dimmed"
                >
                  Watchlist empty. Add some!
                </Text>
              </Center>
            ) : (
              <SimpleGrid
                cols={4}
                spacing={{ base: 10, sm: 15, md: 20, lg: 25 }}
                breakpoints={[
                  { maxWidth: 1200, cols: 3, spacing: 20 },
                  { maxWidth: 980, cols: 2, spacing: 15 },
                  { maxWidth: 600, cols: 1, spacing: 10 },
                ]}
                sx={(theme) => ({
                  margin: '0 auto',
                  width: '100%',
                  [theme.fn.smallerThan('sm')]: {
                    gap: theme.spacing.xs,
                  },
                })}
              >
                {watchlist.map((movie) => (
                  <Box 
                    key={movie.id}
                    sx={(theme) => ({
                      width: '100%',
                      [theme.fn.smallerThan('sm')]: {
                        maxWidth: '100%',
                      },
                    })}
                  >
                    <WatchlistCard movie={movie} />
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Stack>
        {/* </Paper> */}
      </Container>
    </Box>
  );
}