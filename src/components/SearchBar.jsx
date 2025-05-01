import { useState } from 'react';
import { TextInput, Button, Group } from '@mantine/core';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Group position="center" my="md">
      {/* TextInput for the search query */}
      <TextInput
        placeholder="Search movies or anime..."
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        onKeyPress={(event) => {
          if (event.key === 'Enter') handleSearch();
        }}
        sx={{ flex: 1 }}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Group>
  );
}
