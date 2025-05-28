import React from 'react';
import { Title, Text, Image, Loader, Center } from '@mantine/core';
import { motion } from 'framer-motion';

function CastSection({ cast, loading, error, classes }) {
  return (
    <div className={classes.castSection}>
      <Title order={4} className={classes.castTitle} style={{color:'white'}}>
        Cast
      </Title>
      {loading ? (
        <Center>
          <Loader size="sm" />
        </Center>
      ) : error ? (
        <Text color="red">{error}</Text>
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
              <Text size="sm" weight={500} lineClamp={1} color='white'>
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
  );
}

export default CastSection;