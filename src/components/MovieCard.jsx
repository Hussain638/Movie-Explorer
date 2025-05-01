// import { Card, Image, Text, Badge, Button, Group, Stack, AspectRatio,Rating  } from '@mantine/core';
// import { notifications } from '@mantine/notifications';
// import { useWatchlistStore } from '../store/WatchlistStore';

// export default function MovieCard({ movie }) {
//   const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);

//   const handleAdd = () => {
//     addToWatchlist(movie);
//     notifications.show({
//       title: 'Added to Watchlist',
//       message: movie.title,
//       color: 'green',
//     });
//   };

//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
//     : 'https://via.placeholder.com/300x450?text=No+Image';

//   return (
//     <Card
//       shadow="md"
//       radius="md"
//       withBorder
//       p="xs"
//       style={{ transition: 'box-shadow 0.2s ease' }}
//       mih="100%" // Minimum height for uniformity
//       sx={{
//         '&:hover': {
//           boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
//         },
//       }}
//     >
//       <Card.Section>
//         <AspectRatio ratio={3/ 3}>
//           <Image src={imageUrl} alt={movie.title} fit="cover" />
//         </AspectRatio>
//       </Card.Section>

//       <Stack gap="xs" mt="md" justify="space-between" style={{ flexGrow: 1 }}>
//         <Group justify="space-between" align="center">
//           <Text fw={500} size="md" lineClamp={1}>
//             {movie.title}
//           </Text>
//           {movie.release_date && (
//             <Badge color="gray" variant="light">
//               {movie.release_date.slice(0, 4)}
//             </Badge>
//           )}
//         </Group>
//         {movie.vote_average && (
//           <Group position="apart" mt="sm">
//             <Text size="sm" color="dimmed">Rating:</Text>
//             <Rating value={movie.vote_average / 2} fractions={10} readOnly /> {/* Divide by 2 for Mantine's 0-5 scale */}
//           </Group>
//         )}

//         <Text size="sm" color="dimmed" lineClamp={3}>
//           {movie.overview || 'No overview available.'}
//         </Text>

//         <Button variant="filled" color="blue" fullWidth mt="md" onClick={handleAdd}>
//           Add to Watchlist
//         </Button>
//       </Stack>
//     </Card>
//   );
// }

import { Card, Image, Text, Badge, Button, Group, Stack, AspectRatio, Rating, Box } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useWatchlistStore } from '../store/WatchlistStore';

export default function MovieCard({ movie }) {
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);

  const handleAdd = () => {
    addToWatchlist(movie);
    notifications.show({
      title: 'Added to Watchlist',
      message: movie.title,
      color: 'teal',
    });
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Card
      shadow="lg"
      radius="md"
      p="xs"
      h='450px'
      withBorder
      mih="100%"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? '#1c1c1e' : '#f0f0f0',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: theme.shadows.xl,
        },
      })}
    >
      <Card.Section>
        <AspectRatio ratio={4 / 4}>
          <Image
            src={imageUrl}
            alt={movie.title}
            fit="cover"
            withPlaceholder
            radius="md"
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
