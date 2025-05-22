import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_URL = "http://localhost:8000";

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${BACKEND_URL}/api/`, prepareHeaders: async (headers, { getState }) => {
        const token = await window?.Clerk?.session?.getToken();
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
    } 
  }),
    endpoints: (builder) => ({
        getTours: builder.query({
            query: () => "tours",
        }),
        getTourById: builder.query({
            query: (id) => `tours/${id}`,
        }),
        getRooms: builder.query({
            query: () => "rooms",
        }),
        getRoomById: builder.query({
            query: (id) => `rooms/${id}`,
        }),
        createTour: builder.mutation({
            query: (tour) => ({
                url: "tours",
                method: "POST",
                body: tour,
            }),
        }),
        createRoom: builder.mutation({
            query: (room) => ({
                url: "rooms",
                method: "POST",
                body: room,
            }),
        }),
        updateTour: builder.mutation({
            query: ({ id, ...tour }) => ({
                url: `tours/${id}`,
                method: "PUT",
                body: tour,
            }),
        }),
        updateRoom: builder.mutation({
            query: ({ id, ...room }) => ({
                url: `rooms/${id}`,
                method: "PUT",
                body: room,
            }),
        }),
        deleteTour: builder.mutation({
            query: (id) => ({
                url: `tours/${id}`,
                method: "DELETE",
            }),
        }),
        deleteRoom: builder.mutation({
            query: (id) => ({
                url: `rooms/${id}`,
                method: "DELETE",
            }),
        }),
        createRoomBooking: builder.mutation({
            query: (roomBooking) => ({
                url: "roomBookings",
                method: "POST",
                body: roomBooking,
            }),
        }),    
    }),
});

export const {
    useGetToursQuery,
    useGetTourByIdQuery,
    useGetRoomsQuery,
    useGetRoomByIdQuery,
    useCreateTourMutation,
    useCreateRoomMutation,
    useUpdateTourMutation,
    useUpdateRoomMutation,
    useDeleteTourMutation,
    useDeleteRoomMutation,
    useCreateRoomBookingMutation,
} = Api;