import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { blogApi } from "./blogapi.js";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/users`,
        credentials: "include"
    }),

    tagTypes: ['Users'],


    endpoints: (builder) => ({

        getProfile: builder.query({
            query: () => `/profile`,
        }),

        logout: builder.query({
            query: () => `/logout`,
        }),

        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(blogApi.util.invalidateTags(['blog']));
                } catch (err) {
                    console.log(err);
                }
            }
        }),

    })
})

export const { useRegisterMutation, useLoginMutation, useGetProfileQuery, useLazyLogoutQuery } = api;

