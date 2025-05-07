import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { store } from './lib/store';
import { Provider } from 'react-redux';

import HomePage from './pages/home.page';
import SignUpPage from './pages/sign-up.page';
import SignInPage from './pages/sign-in.page';
import RoomsPage from './pages/rooms.page';
import ToursPage from './pages/tours.page';
import AdminPage from './pages/admin.page';
import RoomPage from './pages/room.page';
import TourPage from './pages/tour.page';
import CreateTourPage from './pages/create-tour.page';
import CreateRoomPage from './pages/create-room.page';
import AdminTourListPage from './pages/adminTourList.page';
import UpdateTourPage from './pages/update-tour.page';
import AdminRoomListPage from './pages/adminRoomList.page';
import UpdateRoomPage from './pages/update-room.page';

import RootLayout from './layouts/root-layout.layout';
import MainLayout from './layouts/main.layout';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>

            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/rooms" element={<RoomsPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/rooms/:id" element={<RoomPage />} />
              <Route path="/tours/:id" element={<TourPage />} />
              <Route path="/tours/create" element={<CreateTourPage />} />
              <Route path="/rooms/create" element={<CreateRoomPage />} />
              <Route path="/tours/update" element={<AdminTourListPage />} />
              <Route path="/tours/update/:id" element={<UpdateTourPage />} />
              <Route path="rooms/update" element={<AdminRoomListPage />} />
              <Route path="/rooms/update/:id" element={<UpdateRoomPage />} />

            </Route>

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-out" element={<SignUpPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
