import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    // Get Task
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    // Create Task
    createTask: builder.mutation({
      query: (taskData) => ({
        url: "/tasks",
        method: "POST",
        body: taskData,
      }),
    }),
  }),
});

export const { useGetTasksQuery, useCreateTaskMutation } = baseApi;
