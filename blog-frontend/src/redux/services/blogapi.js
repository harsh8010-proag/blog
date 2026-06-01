import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}/blogs`,
        credentials: "include"
    }),

    tagTypes: ['blog'],

    endpoints: (builder) => ({

        getBlog: builder.query({
            query: () => `/getblog`,
            providesTags: ['blog']
        }),

        getUserBlog: builder.query({
            query: () => `/userblog`,
            providesTags: ['blog']
        }),

        getBlogById: builder.query({
            query: (id) => `/ditailblog/${id}`
        })
        ,
        addBlog: builder.mutation({
            query: (data) => ({
                url: '/addblog',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['blog']
        })
    })
})

export const { useAddBlogMutation, useGetBlogQuery, useGetBlogByIdQuery, useGetUserBlogQuery } = blogApi;