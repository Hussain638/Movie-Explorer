import { Box, Stack, Title, NumberInput, Select, RangeSlider } from '@mantine/core';
import { useState } from 'react';

export default function MovieFilters({ onFilterChange }) {
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState([0, 10]);

  const handleYearChange = (value) => {
    setYear(value);
    onFilterChange({ year: value, genre, rating });
  };

  const handleGenreChange = (value) => {
    setGenre(value);
    onFilterChange({ year, genre: value, rating });
  };

  const handleRatingChange = (value) => {
    setRating(value);
    onFilterChange({ year, genre, rating: value });
  };

  return (
    <Box sx={{ padding: 16, borderRight: '1px solid #e0e0e0', minHeight: '100vh' }}>
      <Stack spacing="md">
        <Title order={4}>Filters</Title>
        <NumberInput
          label="Year"
          placeholder="Select year"
          value={year}
          onChange={handleYearChange}
          min={1900}
          max={2025}
        />
        <Select
          label="Genre"
          placeholder="Select genre"
          data={[
            { value: 'action', label: 'Action' },
            { value: 'comedy', label: 'Comedy' },
            { value: 'drama', label: 'Drama' },
            { value: 'horror', label: 'Horror' },
            // Add additional genres as needed
          ]}
          value={genre}
          onChange={handleGenreChange}
          clearable
        />
        <RangeSlider
          label="Rating"
          min={0}
          max={10}
          step={0.1}
          value={rating}
          onChange={handleRatingChange}
          marks={[
            { value: 0, label: '0' },
            { value: 5, label: '5' },
            { value: 10, label: '10' },
          ]}
        />
        {/* Add more advanced options if needed */}
      </Stack>
    </Box>
  );
}