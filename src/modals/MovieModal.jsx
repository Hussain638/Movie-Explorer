import React, { useEffect, useState } from 'react';
import { Modal, ScrollArea, Paper } from '@mantine/core';
import { motion } from 'framer-motion';
import useStyles from '../styles/MovieModal.styles';
import MovieHeader from '../components/header/Movieheader';
import CastSection from '../components/CastSection';
import RelatedMovies from '../components/RelatedMovies';
import { getMovieCast, getMovieTrailer, getRelatedMovies } from '../services/api';

export default function MovieModal({ movie, opened, onClose }) {
  const { classes } = useStyles();
  const [cast, setCast] = useState([]);
  const [castLoading, setCastLoading] = useState(false);
  const [castError, setCastError] = useState('');

  const [trailerUrl, setTrailerUrl] = useState('');
  const [showTrailer, setShowTrailer] = useState(false);

  const [directors, setDirectors] = useState([]);
  const [writers, setWriters] = useState([]);
  const [uaRating, setUaRating] = useState('');

  const [relatedMovies, setRelatedMovies] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [relatedError, setRelatedError] = useState('');

  useEffect(() => {
    if (movie?.id) {
      // Fetch cast data & crew (for directors and writers)
      setCastLoading(true);
      setCastError('');
      getMovieCast(movie.id)
        .then((data) => {
          setCast(data.cast || []);
          if (movie.credits && movie.credits.crew) {
            const directorsData = movie.credits.crew.filter(
              (person) => person.job === 'Director'
            );
            const writersData = movie.credits.crew.filter(
              (person) => person.job === 'Writer' || person.job === 'Screenplay'
            );
            setDirectors(directorsData);
            setWriters(writersData);
            console.log('director',directorsData)
          }
          if (movie.uaRating) {
            setUaRating(movie.uaRating);
          }
        })
        .catch(() => {
          setCastError('Failed to fetch cast data.');
        })
        .finally(() => {
          setCastLoading(false);
        });

      // Fetch trailer URL
      getMovieTrailer(movie.id)
        .then((data) => {
          setTrailerUrl(data.trailerUrl);
        })
        .catch(() => {
          setTrailerUrl('');
        });

      // Fetch related movies
      setRelatedLoading(true);
      setRelatedError('');
      getRelatedMovies(movie.id)
        .then((data) => {
          setRelatedMovies(data.results || []);
        })
        .catch(() => {
          setRelatedError('Failed to fetch related movies.');
        })
        .finally(() => {
          setRelatedLoading(false);
        });
    } else {
      setCast([]);
      setTrailerUrl('');
      setRelatedMovies([]);
      setDirectors([]);
      setWriters([]);
      setUaRating('');
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
      size="xl" 
      // overlayOpacity={0.75}
      // overlayBlur={10}
      // overlayProps={{ opacity: 0.55, blur: 30 }}
      styles={{
        modal: {
          padding: 0,
          border: 'none',
        },
      }}
    >
      <Paper className={classes.modalContent} style={{backgroundColor:'#242424'}}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MovieHeader
            movie={movie}
            directors={directors}
            writers={writers}
            uaRating={uaRating}
            trailerUrl={trailerUrl}
            showTrailer={showTrailer}
            toggleTrailer={() => setShowTrailer(!showTrailer)}
            classes={classes}
          />
        </motion.div>
        <ScrollArea style={{ maxHeight: '80vh' }}>
          <CastSection cast={cast} loading={castLoading} error={castError} classes={classes} />
          </ScrollArea>
          <ScrollArea style={{ maxHeight: '80vh' }}>
          <RelatedMovies
            movies={relatedMovies}
            loading={relatedLoading}
            error={relatedError}
            classes={classes}
          />
        </ScrollArea>
      </Paper>
    </Modal>
  );
}