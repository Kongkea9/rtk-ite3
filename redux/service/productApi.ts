


import { Product } from "@/lib/type/productType";
import { ecommerceApi } from "../api";

export const CategoryApi = ecommerceApi.injectEndpoints({
//   reducerPath: "ecommerceApi",
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),


// createProduct: builder.mutation<any, { newProduct: object,
// accessToken: string }>({
//  query: ({ newProduct, accessToken }) => ({
//  url: "/api/products/",
//  method: "POST",
//  headers: {
//  "Content-Type": "application/json",
//  Authorization: `Bearer ${accessToken}`
// ,
//  },
//  body: newProduct,
//  }),

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/api/v1/products",
    }),
    createProduct: builder.mutation<Product, {newProduct: object}>({
        query: ({newProduct}) => ({
            url:  "/api/v1/products",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        body: newProduct
        })
    })
    // getCategoryById: builder.query<Category, number>({
    //   query: (id) => `/api/v1/categories/${id}`,
    // }),
  }),
});

export const { useGetProductsQuery } = CategoryApi;
