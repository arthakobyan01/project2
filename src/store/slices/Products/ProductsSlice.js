import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductsAPI";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    filteredProducts: [],
  },
  reducers: {
    selectProduct: (state, { payload }) => {

      state.filteredProducts = state.products.filter(el => el.catalogName === payload)
    },
    fetchFillter: (state, { payload }) => {
      state.filteredProducts = state.products.filter(el => el.catalogName === payload)
    },

  },

  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        products: [...payload],

      }
    }
  }
})


export const selectProducts = state => state.products
export const { selectProduct, fetchFillter } = productsSlice.actions
export const productsReducer = productsSlice.reducer