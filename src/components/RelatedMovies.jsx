import React from 'react';
import { Title, Text, Image, Loader, Center, Card } from '@mantine/core';
import { motion } from 'framer-motion';

function RelatedMovies({ movies, loading, error, classes }) {
  return (
    <div className={classes.relatedSection}>

      <Title order={4} className={classes.relatedTitle}>
        Related Movies
      </Title>
      {loading ? (
        <Center>
          <Loader size="sm" />
        </Center>
      ) : error ? (
        <Text color="red">{error}</Text>
      ) : movies.length > 0 ? (
        <div className={classes.relatedContainer}>
          {movies.map((related) => (
            <motion.div
              key={related.id}
              className={classes.relatedCard}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={
                  related.poster_path
                    ? `https://image.tmdb.org/t/p/w185${related.poster_path}`
                    : '/no-image.png'
                }
                alt={related.title}
                width={130}
                height={160}
                className={classes.relatedImage}
                fit="cover"
                withPlaceholder
              />
              <Text size="xs" weight={500} lineClamp={2}>
                {related.title}
              </Text>
            </motion.div>
          ))}
        </div>
      ) : (
        <Text>No related movies available.</Text>
      )}
    </div>
  );
}

export default RelatedMovies;