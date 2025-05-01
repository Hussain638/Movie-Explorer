import Home from '../pages/HomePage'; 
import Watchlist from '../pages/Watchlist'; 

export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home'
  },
  {
    path: '/watchlist',
    element: Watchlist,
    title: 'Watchlist'
  }
];