import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./CategoriesAPI";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoryData: []
  },
  reducers: {
    toggleCategories: (state, { payload: { id } }) => {
      state.categoryData = [
        ...state.categoryData.map(el => ({
          id: el.id,
          title: el.title,
          checked: el.id === id ? true : false,
          slug: el.slug,
          dateDay: el.dateDay
        }))
      ]
    }
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        categoryData: [...payload]
      }
    }
  }
})

export const selectCategories = state => state.categories
export const { toggleCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer