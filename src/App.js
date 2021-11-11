import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import pages from './pages';
import { ROUTES } from './helpers';
import './App.scss';

function App() {
  return (
    <div className='layer'>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={pages.Home} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;