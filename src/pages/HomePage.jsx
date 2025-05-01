import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Stack,
  Title,
  Text,
  Center,
  Paper,
  ActionIcon,
} from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { motion, useAnimation } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieModal from '../modals/MovieModal';
import { searchMovies } from '../services/api';
import EnhancedCinematicBackground from '../components/CinematicBackground';

const MotionTitle = motion(Title);
const MotionPaper = motion(Paper);
const MotionActionIcon = motion(ActionIcon);

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [filters] = useState({});

  // Animation controls for dynamic effects
  const reelControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    // Example parallax effect: update animation controls on scroll (optional)
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      reelControls.start({ y: scrolled * 0.05 });
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reelControls]);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setLoading(true);
    setError('');
    try {
      const data = await searchMovies(searchQuery, 1, filters);
      setMovies(data.results || []);
      setTotalPages(data.total_pages || 1);
      if (!data.results.length) {
        setError('No results found. Try a different search.');
      }
    } catch (e) {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  };

  const loadMore = async () => {
    if (loading) return;
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchMovies(query, nextPage, filters);
      setMovies((prev) => [...prev, ...(data.results || [])]);
      setPage(nextPage);
    } catch (e) {
      setError('Failed to fetch more movies.');
    }
    setLoading(false);
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMovie(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      <EnhancedCinematicBackground />

      <Container
        size="md"
        mt="60px"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            height: 'calc(100vh - 60px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <MotionPaper
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            shadow="xl"
            radius="lg"
            p="xs"
            withBorder
            style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              width: '100%',
              maxWidth: 1000,
            }}
          >
            <Stack justify='center' align="center" spacing="xs">
              <MotionTitle
                order={1}
                ta="center"
                size="1.8rem"
                color="blue.3"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ textShadow: '0 0 15px #00f2fe, 0 0 20px #4facfe',
                }}
              >
                🎬 Movie Explorer
              </MotionTitle>
              <Text ta="center" size="lg" c="cyan">
                Dive into cinematic worlds with immersive visuals
              </Text>
              <Box sx={{ width: '100%', maxWidth: 500 }}>
                <SearchBar onSearch={handleSearch} loading={loading} />
              </Box>
            </Stack>
          </MotionPaper>
        </Box>

        {/* Results Section */}
        {(movies.length > 0 || error) && (
          <Box mt="xl">
            {error && (
              <Center>
                <Text color="red" size="md" mb="lg">
                  {error}
                </Text>
              </Center>
            )}
            <MovieList
              movies={movies}
              page={page}
              totalPages={totalPages}
              loadMore={loadMore}
              loading={loading}
              query={query}
              onCardClick={handleCardClick}
            />
          </Box>
        )}
      </Container>

      <MovieModal movie={selectedMovie} opened={modalOpen} onClose={handleCloseModal} />

      {/* Scroll to top button */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MotionActionIcon
            variant="filled"
            color="blue"
            size="lg"
            radius="xl"
            style={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <IconArrowUp size={24} />
          </MotionActionIcon>
        </motion.div>
      )}
    </Box>
  );
}