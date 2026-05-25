import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`
    }),

    tagTypes: ['Blogs', 'Users'],
    endpoints: (builder) => ({

        getBlogsByName: builder.query({
            query: () => `blogs`,
            providesTags: ['Blogs']
        }),

        getBlogById: builder.query({
            query: (id) => `blogs?id=${id}`
        }),


        addBlog: builder.mutation({

            query: (data) => ({
                url: 'blogs',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Blogs']
        }),

        register: builder.mutation({
            query: (data) => ({
                url: 'users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Users']
        }),


        login: builder.query({
            query: (email) => `users?email=${email}`
        }),

        userBlog: builder.query({
            query: (email) => `blogs?user.email=${email}`,
            providesTags: ['Blogs']
        })
        ,
        updateBlog: builder.mutation({

            query: ({ id, ...blog }) => ({

                url: `blogs/${id}`,

                method: "PATCH",

                body: blog

            }),

            invalidatesTags: ["Blogs"]

        }),


        deleteBlog: builder.mutation({

            query: (id) => ({

                url: `blogs/${id}`,

                method: "DELETE"

            }),

            invalidatesTags: ["Blogs"]

        }),

    })
})

export const { useGetBlogsByNameQuery, useRegisterMutation, useAddBlogMutation, useLazyLoginQuery,
    useUserBlogQuery, useUpdateBlogMutation, useDeleteBlogMutation, useGetBlogByIdQuery } = api;

