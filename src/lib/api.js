import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_URL = "http://localhost:8000";

export const Api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: `${BACKEND_URL}/api/` }),
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
    }),
});

export const {
    useGetToursQuery,
    useGetTourByIdQuery,
    useGetRoomsQuery,
    useGetRoomByIdQuery,
} = Api;