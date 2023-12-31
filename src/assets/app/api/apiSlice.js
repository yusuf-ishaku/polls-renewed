import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery(
    {baseUrl: "https://pollsapp-36x1.onrender.com/" }
)
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User"],
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) =>({}),
});


