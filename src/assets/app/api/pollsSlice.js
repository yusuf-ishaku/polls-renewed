import { apiSlice } from "./apiSlice";
const POLLS_URL = '/api/polls';

export const pollsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        createElection: builder.mutation({
            query: (data) =>({
                method: 'POST',
                url: `${POLLS_URL}/create`,
                body: data
            })
        }),
        getPolls: builder.query({
            query: () =>({
                method: "GET",
                url: `${POLLS_URL}/all`
            })
        })
    })
});

export const {useCreateElectionMutation, useGetPollsQuery} = pollsApiSlice;
