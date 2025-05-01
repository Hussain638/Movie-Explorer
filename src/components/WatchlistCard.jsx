// import { Card, Image, Text, Badge, Button, Group, Stack, AspectRatio } from '@mantine/core';
// import { notifications } from '@mantine/notifications';
// import { useWatchlistStore } from '../store/WatchlistStore';

// export default function WatchlistCard({ movie }) {
//   const removeFromWatchlist = useWatchlistStore((state) => state.removeFromWatchlist);

//   const handleRemove = () => {
//     removeFromWatchlist(movie.id);
//     notifications.show({
//       title: 'Removed from Watchlist',
//       message: movie.title,
//       color: 'red',
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
//       p="md"
//       style={{ transition: 'box-shadow 0.2s ease' }}
//       mih={450}
//       w={250}
//       sx={{
//         '&:hover': {
//           boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
//         },
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       {/* Image Section */}
//       <Card.Section>
//         <AspectRatio ratio={2 / 3}>
//           <Image src={imageUrl} alt={movie.title} fit="cover" />
//         </AspectRatio>
//       </Card.Section>

//       {/* Content Section */}
//       <Stack gap="xs" mt="md" justify="space-between" style={{ flexGrow: 1 }}>
//         <Group justify="space-between" align="center">
//           <Text fw={600} size="lg" lineClamp={2}>
//             {movie.title}
//           </Text>
//           {movie.release_date && (
//             <Badge color="gray" variant="light">
//               {movie.release_date.slice(0, 4)}
//             </Badge>
//           )}
//         </Group>

//         {/* Remove Button */}
//         <Button variant="filled" color="red" fullWidth mt="auto" onClick={handleRemove}>
//           Remove
//         </Button>
//       </Stack>
//     </Card>
//   );
// }

import { Card, Image, Text, Badge, Button, Group, Stack, AspectRatio } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useWatchlistStore } from '../store/WatchlistStore';

export default function WatchlistCard({ movie }) {
  const removeFromWatchlist = useWatchlistStore((state) => state.removeFromWatchlist);

  const handleRemove = () => {
    removeFromWatchlist(movie.id);
    notifications.show({
      title: 'Removed from Watchlist',
      message: movie.title,
      color: 'red',
    });
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <Card
      shadow="md"
      radius="md"
      withBorder
      padding="md"
      sx={(theme) => ({
        transition: 'all 0.2s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '100%',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: theme.shadows.lg,
        },
        [theme.fn.smallerThan('sm')]: {
          minHeight: '400',
        },
        [theme.fn.largerThan('md')]: {
          maxWidth: 300,
        },
      })}
    >
      {/* Image Section */}
      <Card.Section>
        <AspectRatio 
          ratio={2/3}
          sx={(theme) => ({
            width: '100%',
            [theme.fn.smallerThan('sm')]: {
              maxHeight: 360,
            },
          })}
        >
          <Image
            src={imageUrl}
            alt={movie.title}
            fit="cover"
            sx={{
              img: {
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              },
            }}
          />
        </AspectRatio>
      </Card.Section>

      {/* Content Section */}
      <Stack 
        spacing="xs"
        mt="md"
        justify="space-between" 
        style={{ flexGrow: 1 }}
      >
        <Group 
          justify="space-between" 
          align="flex-start"
          wrap="nowrap"
        >
          <Text 
            fw={600} 
            size="md"
            lineClamp={2}
            sx={(theme) => ({
              flex: 1,
              [theme.fn.smallerThan('sm')]: {
                fontSize: theme.fontSizes.sm,
              },
            })}
          >
            {movie.title}
          </Text>
          {movie.release_date && (
            <Badge 
              color="gray" 
              variant="light"
              size="sm"
            >
              {movie.release_date.slice(0, 4)}
            </Badge>
          )}
        </Group>

        {/* Remove Button */}
        <Button
          variant="filled"
          color="red"
          fullWidth
          mt="auto"
          onClick={handleRemove}
          size="sm"
          sx={(theme) => ({
            transition: 'background-color 0.2s ease',
            '&:hover': {
              backgroundColor: theme.colors.red[7],
            },
          })}
        >
          Remove
        </Button>
      </Stack>
    </Card>
  );
}