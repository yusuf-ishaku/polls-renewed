import { apiSlice } from "./apiSlice";

const AUTH_URL = '/api/auth/'
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        loginUser: builder.mutation({
            query: (userData) =>({
                url: `${AUTH_URL}/login`,
                method: 'POST',
                body: userData
            })
        }),
        registerUser: builder.mutation({
            query: (newUserData) =>({
                url: `${AUTH_URL}/signup`,
                method: 'POST',
                body: newUserData
            })
        }), 
    })
});

export const { useRegisterUserMutation, useLoginUserMutation,} = authApiSlice;
 