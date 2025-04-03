import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';
import SignInPage from './pages/sign-in.page';
import RoomsPage from './pages/rooms.page';
import ToursPage from './pages/tours.page';

import RootLayout from './layouts/root-layout.layout';
import MainLayout from './layouts/main.layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>

          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/tours" element={<ToursPage />} />
          </Route>

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-out" element={<SignUpPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
