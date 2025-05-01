import React, { useEffect, useState } from 'react';
import {
  Modal,
  ScrollArea,
  Group,
  Stack,
  Title,
  Text,
  Badge,
  Image,
  Loader,
  Center,
  Paper,
} from '@mantine/core';
// Using createStyles from @mantine/styles instead
import { createStyles } from '@mantine/styles';
import { motion } from 'framer-motion';
import { getMovieCast } from '../services/api';

const useStyles = createStyles((theme) => ({
  modalContent: {
    backgroundColor: "#8EB0C5",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
  },
  header: {
    display: 'flex',
    gap: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  poster: {
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.md,
  },
  details: {
    flex: 1,
    color: 'white',
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  infoBadges: {
    marginBottom: theme.spacing.sm,
  },
  overview: {
    color: theme.colors.gray[6],
    lineHeight: 1.6,
  },
  castSection: {
    marginTop: theme.spacing.lg,
  },
  castTitle: {
    marginBottom: theme.spacing.sm,
  },
  castContainer: {
    display: 'flex',
    gap: theme.spacing.md,
    overflowX: 'auto',
    paddingBottom: theme.spacing.sm,
  },
  castCard: {
    backgroundColor: "#414047",
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.sm,
    flex: '0 0 auto',
    width: 140,
    padding: theme.spacing.xs,
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows.md,
    },
  },
  castImage: {
    borderRadius: theme.radius.sm,
    marginBottom: theme.spacing.xs,
  },
}));

export default function MovieModal({ movie, opened, onClose }) {
  const { classes, theme } = useStyles();
  const [cast, setCast] = useState([]);
  const [castLoading, setCastLoading] = useState(false);
  const [castError, setCastError] = useState('');

  useEffect(() => {
    if (movie?.id) {
      setCastLoading(true);
      setCastError('');
      getMovieCast(movie.id)
        .then((data) => {
          setCast(data.cast || []);
        })
        .catch(() => {
          setCastError('Failed to fetch cast data.');
        })
        .finally(() => {
          setCastLoading(false);
        });
    } else {
      setCast([]);
    }
  }, [movie]);

  if (!movie) {
    return null;
  }

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      withCloseButton
      size="lg"
      overlayOpacity={0.75}
      overlayBlur={10}
      styles={{
        modal: {
          // background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          padding: 0,
          border: 'none',
        },
      }}
    >

      <Paper className={classes.modalContent}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
              </Group>
              <Text className={classes.overview} size='sm'>
                {movie.overview || 'No overview available.'}
              </Text>
            </div>
          </div>
        </motion.div>
        <ScrollArea style={{ maxHeight: '80vh' }}>
          <div className={classes.castSection}>
            <Title order={4} className={classes.castTitle}>
              Cast
            </Title>
            {castLoading ? (
              <Center>
                <Loader size="sm" />
              </Center>
            ) : castError ? (
              <Text color="red">{castError}</Text>
            ) : cast.length > 0 ? (
              <div className={classes.castContainer}>
                {cast.map((member) => (
                  <motion.div
                    key={member.cast_id || member.id}
                    className={classes.castCard}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={
                        member.profile_path
                          ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                          : '/no-image.png'
                      }
                      alt={member.name}
                      width={120}
                      height={160}
                      className={classes.castImage}
                      fit="cover"
                      withPlaceholder
                    />
                    <Text size="sm" weight={500} lineClamp={1}>
                      {member.name}
                    </Text>
                    <Text size="xs" color="dimmed" lineClamp={1}>
                      {member.character}
                    </Text>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Text>No cast information available.</Text>
            )}
          </div>
        </ScrollArea>
      </Paper>

    </Modal>
  );
}