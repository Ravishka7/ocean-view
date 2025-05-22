import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import { store } from './lib/store';
import { Provider } from 'react-redux';
import { ClerkProvider } from '@clerk/clerk-react';

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
import MyBookings from './pages/roomBookings.page';

import RootLayout from './layouts/root-layout.layout';
import MainLayout from './layouts/main.layout';
import ProtectedLayout from './layouts/protected.layout';
import AdminProtectedLayout from './layouts/admin-protected.layout';
import RoomBookPage from './pages/roomBook.page';



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to .env file');
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>

            <Route element={<RootLayout />}>

                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/rooms" element={<RoomsPage />} />
                  <Route path="/tours" element={<ToursPage />} />
                  <Route path="/rooms/:id" element={<RoomPage />} />
                  <Route path="/tours/:id" element={<TourPage />} />
                  
                  <Route element={<ProtectedLayout />}>
                    <Route path="/bookings" element={<RoomBookPage />} />
                    <Route path="/bookings/:id" element={<MyBookings />} />
                  //Need to implement route of MyBookings Page here
                    <Route element={<AdminProtectedLayout />}>
                      <Route path="/admin" element={<AdminPage />} />
                      <Route path="/tours/create" element={<CreateTourPage />} />
                      <Route path="/rooms/create" element={<CreateRoomPage />} />
                      <Route path="/tours/update" element={<AdminTourListPage />} />
                      <Route path="/tours/update/:id" element={<UpdateTourPage />} />
                      <Route path="rooms/update" element={<AdminRoomListPage />} />
                      <Route path="/rooms/update/:id" element={<UpdateRoomPage />} />
                    </Route>  
                  </Route>
              
                </Route>

              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </Provider>
    </ClerkProvider> 
  </StrictMode>,
);
