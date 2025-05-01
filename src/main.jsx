// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import App from './App';
import '@mantine/core/styles.css'; // Import Mantine global styles

// Render the root of the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <App />
    </MantineProvider>
  </BrowserRouter>
);
