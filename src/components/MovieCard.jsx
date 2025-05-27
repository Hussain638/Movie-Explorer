import { Card, Image, Text, Badge, Button, Group, Stack, AspectRatio, Rating, Box } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useWatchlistStore } from '../store/WatchlistStore';

export default function MovieCard({ movie, onCardClick }) {
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);

  const handleAdd = (e) => {
    e.stopPropagation();
    addToWatchlist(movie);
    notifications.show({
      title: 'Added to Watchlist',
      message: movie?.title || '',
      color: 'teal',
       position: 'top-right',
    });
  };

  // If movie is null or undefined, return null (or you can render a placeholder).
  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Card
      onClick={() => onCardClick(movie)}
      shadow="lg"
      radius="md"
      p="xs"
      h="450px"
      withBorder
      mih="100%"
      style={{
        backgroundColor: '#1c1c1e',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          // boxShadow: theme.shadows.xl,
        },
      }}
    >
      <Card.Section style={{cursor:'pointer'}}>
        <AspectRatio ratio={4/ 4}>
          <Image
            src={imageUrl}
            alt={movie.title}
            fit='cover'
            withPlaceholder
            radius="md"
            style={{cursor:'pointer'}}
          />
        </AspectRatio>
      </Card.Section>

      <Stack justify="space-between" spacing="sm" mt="xs" style={{ flexGrow: 1 }}>
        <Group position="apart" align="center">
          <Text weight={600} size="lg" lineClamp={1} color="white">
            {movie.title}
          </Text>
          {movie.release_date && (
            <Box ml="auto">
              <Badge color="violet" variant="filled">
                {movie.release_date.slice(0, 4)}
              </Badge>
            </Box>
          )}
        </Group>

        {movie.vote_average && (
          <Group position="apart" align="center">
            <Text size="xs" color="gray.3">
              Rating:
            </Text>
            <Rating value={movie.vote_average / 2} fractions={10} readOnly />
          </Group>
        )}

        <Text size="xs" color="gray.4" lineClamp={2}>
          {movie.overview || 'No overview available.'}
        </Text>

        <Button
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          fullWidth
          radius="md"
          onClick={handleAdd}
        >
          Add to Watchlist
        </Button>
      </Stack>
    </Card>
  );
}