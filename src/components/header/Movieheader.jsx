import React from 'react';
import { Image, Title, Group, Text, Badge, ActionIcon, Center } from '@mantine/core';
import { IconPlayerPlay, IconVideoOff, IconPlaylist, IconHeart, IconShare } from '@tabler/icons-react';

function MovieHeader({ movie, directors, writers, uaRating, trailerUrl, showTrailer, toggleTrailer, classes }) {
  return (
    <>
    <div className={classes.header}>
      <Image
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : '/no-image.png'
        }
        alt={movie.title}
        width={150}
        height={225}
        className={classes.poster}
        fit="cover"
        withPlaceholder
      />
      <div className={classes.details}>
        <Title order={3} className={classes.title}>
          {movie.title}
        </Title>
        <Group className={classes.infoBadges}>
          {movie.release_date && <Badge color="teal">Release: {movie.release_date}</Badge>}
          {movie.vote_average && <Badge color="blue">Rating: {movie.vote_average}</Badge>}
          {uaRating && <Badge color="violet">U/A: {uaRating}</Badge>}
        </Group>
        {directors && directors.length > 0 && (
          <Group className={classes.infoBadges}>
            {directors.map((director) => (
              <Badge key={director.id} color="red" className={classes.crewBadge}>
                Director: {director.name}
              </Badge>
            ))}
          </Group>
        )}
        {writers && writers.length > 0 && (
          <Group className={classes.infoBadges}>
            {writers.map((writer) => (
              <Badge key={writer.id} color="indigo" className={classes.crewBadge}>
                Writer: {writer.name}
              </Badge>
            ))}
          </Group>
        )}
        <Text className={classes.overview} size="sm">
          {movie.overview || 'No overview available.'}
        </Text>
        <Group mt="md" spacing="xl">
          <ActionIcon variant="transparent" color='gray' size="lg">
            <IconPlaylist size={24} />
          </ActionIcon>
          <ActionIcon variant="transparent" color="red" size="lg">
            <IconHeart size={24} />
          </ActionIcon>
          <ActionIcon variant="transparent" color="grape" size="lg">
            <IconShare size={24} />
          </ActionIcon>
          <ActionIcon variant="transparent" color='dark' size="lg" onClick={toggleTrailer} >
            {showTrailer ? <IconVideoOff size={24} /> : <IconPlayerPlay size={24} />}
          </ActionIcon>
        </Group>
        
      </div>
    </div>
    {showTrailer && (
          trailerUrl ? (
            <div className={classes.trailerContainer}>
              <iframe
                className={classes.iframe}
                src={trailerUrl}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <Center mt="md">
              <Text size="sm" color="dimmed">
                Trailer not available.
              </Text>
            </Center>
          )
        )}
    </>
  );
}

export default MovieHeader;