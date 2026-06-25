

import { Category } from "@/lib/type/categoryType";
import { ecommerceApi } from "../api";

export const CategoryApi = ecommerceApi.injectEndpoints({
//   reducerPath: "ecommerceApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/api/v1/categories",
    }),
    // getCategoryById: builder.query<Category, number>({
    //   query: (id) => `/api/v1/categories/${id}`,
    // }),
  }),
});

export const { useGetCategoriesQuery } = CategoryApi;
