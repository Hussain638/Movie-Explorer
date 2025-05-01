import React from 'react';
import { Modal, ScrollArea, Group, Stack, Title, Text, Badge } from '@mantine/core';

export default function MovieModal({ movie, opened, onClose }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={movie?.title || "Movie Details"}
      centered
      size="auto"
      styles={{
        modal: { maxWidth: 500, width: '95vw', padding: 8 },
      }}
    >
      {movie && (
        <ScrollArea style={{ height: 400 }}>
          <Group align="flex-start" spacing="md" noWrap>
            <img
              src={movie.poster_path ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}` : '/no-image.png'}
              alt={movie.title}
              style={{
                borderRadius: 8,
                width: 100,
                minWidth: 80,
                maxWidth: '40vw',
              }}
            />
            <Stack spacing="xs">
              <Title order={3} size="md">{movie.title}</Title>
              <Text size="sm" color="gray.7">
                {movie.overview || "No overview available."}
              </Text>
              <Group spacing="xs">
                {movie.release_date && <Badge color="teal">Release: {movie.release_date}</Badge>}
                <Badge color="blue">{movie.vote_average} Rating</Badge>
              </Group>
            </Stack>
          </Group>
        </ScrollArea>
      )}
    </Modal>
  );
}