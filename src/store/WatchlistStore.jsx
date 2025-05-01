// src/store/watchlistStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Create a Zustand store with persistence
export const useWatchlistStore = create(
  persist(
    (set, get) => ({
      watchlist: [],               // Array of saved movie objects
      addToWatchlist: (movie) => set(state => ({
        watchlist: [...state.watchlist, movie],
      })),                         // Add a movie to the watchlist
      removeFromWatchlist: (id) => set(state => ({
        watchlist: state.watchlist.filter(m => m.id !== id),
      })),                         // Remove a movie by its ID
    }),
    {
      name: 'watchlist-storage',   // Storage key in localStorage
    }
  )
);
