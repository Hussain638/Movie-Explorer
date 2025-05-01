import React from 'react';
import {
  SimpleGrid,
  Center,
  Button,
  Group,
  Text,
  Badge,
  Skeleton,
  Paper,
  Space,
  Container,
  Loader,
} from '@mantine/core';
import MovieCard from '../components/MovieCard';

export default function MovieList({
  movies,
  page,
  totalPages,
  loadMore,
  loading,
  query,
  onCardClick,
}) {
  // When movies are loading on the first page, display a grid of skeletons.
  if (loading && page === 1) {
    return (
      <Container size="lg" py="md" m={0}>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1200, cols: 2, spacing: 'md' },
            { maxWidth: 900, cols: 1, spacing: 'sm' },
          ]}
        >
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} height={300} radius="md" animate />
          ))}
        </SimpleGrid>
      </Container>
    );
  }

  // When no movies are found and not loading, show a centered message.
  if (!loading && movies.length === 0) {
    return (
      <Center py="xl">
        <Text size="lg" color="gray.5" align="center">
          {query
            ? 'No results found. Try a different search.'
            : 'Start by searching for a movie.'}
        </Text>
      </Center>
    );
  }

  return (
    <Container size="xl" py="md" m={0}>
      {/* Info Section */}
      <Paper shadow="md" radius="md" p="md" withBorder sx={{ backgroundColor: '#1e293b' }}>
        <Group position="apart" noWrap>
          <Text size="md" weight={500} color="white">
            Showing page{' '}
            <Badge color="orange" size="md" variant="filled">
              {page}
            </Badge>{' '}
            of{' '}
            <Badge color='orange' size="md" variant="filled">
              {totalPages}
            </Badge>{' '}
            for <b>{query}</b>
          </Text>
          <Text size="sm" color="gray.4">
            Total movies: {movies.length}
          </Text>
        </Group>
      </Paper>

      <Space h="md" />

      {/* Movies Grid */}
      <SimpleGrid
        cols={4}
        spacing="xs"
        breakpoints={[
          { maxWidth: 1200, cols: 2, spacing: 'md' },
          { maxWidth: 900, cols: 1, spacing: 'sm' },
        ]}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onCardClick={onCardClick} />
        ))}
      </SimpleGrid>

      <Space h="md" />

      {/* Load More Button */}
      {page < totalPages && (
        <Center>
          <Button
            variant="outline"
            color="blue"
            onClick={loadMore}
            disabled={loading}
            size="md"
            radius="md"
            sx={{
              maxWidth: 300,
              transition: 'background-color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {loading ? (
              <>
                <Loader size="sm" color="blue" variant="dots" mr="xs" />
                Loading...
              </>
            ) : (
              'Load More'
            )}
          </Button>
        </Center>
      )}
    </Container>
  );
}