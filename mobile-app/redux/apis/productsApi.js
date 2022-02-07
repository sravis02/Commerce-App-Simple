import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKEND_BASE_URL } from "../../constants/backend";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_BASE_URL }),
  tagTypes: ["Products", "CartProducts"],
  endpoints: (builder) => ({
    getBestsellers: builder.query({
      query: () => "products/?bestseller=true",
      providesTags: ["Products"],
    }),
    getProductsByKeyword: builder.query({
      query: (kw) => `products/?search=${kw}`,
      providesTags: ["Products"],
    }),
    addToCart: builder.mutation({
      query: ({ cartId, productIds }) => ({
        url: `cart-add/${cartId}/`,
        method: "POST",
        body: productIds,
      }),
      invalidatesTags: ["Products", "CartProducts"], // Products because later the stock could get decremented from products after atc
      transformResponse: (response, meta, arg) => response.data, // Maybe data dosesnt show bc of this -> remove?
    }),
    removeFromCart: builder.mutation({
      query: ({ cartId, productIds }) => ({
        url: `cart-remove/${cartId}/`,
        method: "POST",
        body: productIds,
      }),
      invalidatesTags: ["Products", "CartProducts"], // Products because later the stock could get incremented from products after remove from cart
    }),
    getNewCart: builder.query({
      query: () => "get-new-cart/",
    }),
    getCartInfo: builder.query({
      query: (cartId) => `cart-info/${cartId}/`,
      providesTags: ["CartProducts"],
    }),
    getStripePublicKey: builder.query({
      query: () => `stripe-public-key/`,
    }),
    getStripePaymentSheet: builder.query({
      query: (cartId) => `payment-sheet/${cartId}/`,
      providesTags: ["CartProducts"],
    }),
  }),
});

export const {
  useGetBestsellersQuery,
  useGetProductsByKeywordQuery,
  useAddToCartMutation,
  useGetNewCartQuery,
  useGetCartInfoQuery,
  useRemoveFromCartMutation,
  useGetStripePublicKeyQuery,
  useGetStripePaymentSheetQuery,
} = productsApi;
