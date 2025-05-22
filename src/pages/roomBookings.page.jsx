import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Link } from "react-router"; 
import { toast } from "sonner";
import { format } from "date-fns";

export default function UserBookingsPage() {
  const { user, isSignedIn } = useUser();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("Please sign in to see your bookings");
      return;
    }

    async function fetchBookings() {
      setLoading(true);
      try {
        const token = await window?.Clerk?.session?.getToken();

        const res = await fetch(`http://localhost:8000/api/roomBookings/user/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        setBookings(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, [isSignedIn, user]);

  if (!isSignedIn) {
    return <p>Please sign in to view your bookings.</p>;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-blue-900">Loading your bookings...</p>
      </div>
    
  );
  }

  if (bookings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-blue-900">You have no room bookings yet.</p>
      </div>
    
  );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">My Room Bookings</h1>
      <ul className="space-y-4">
        {bookings.map((booking) => (
          <li key={booking._id} className="border rounded p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">
              <p className="text-blue-600 ">
                {booking.roomName || "Room"}
              </p>
            </h2>
            <p>
              <strong>Booking Number:</strong> {booking.bookingNumber}
            </p>
            <p>
              <strong>Check-in:</strong> {format(new Date(booking.checkInDate), "PPP")}
            </p>
            <p>
              <strong>Check-out:</strong> {format(new Date(booking.checkOutDate), "PPP")}
            </p>
            <p>
              <strong>Guests:</strong> Adults: {booking.adults}, Children: {booking.children}
            </p>
            <p>
              <strong>Meal Plan:</strong> {booking.mealPlan}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
