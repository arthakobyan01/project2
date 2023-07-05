import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async function () {
    const { data: categoriesData } = await axios.get("http://localhost:3000/categories")

    const data = categoriesData.map(item => ({
      id: item.id.toString(),
      title: item.title,
      slug: item.slug,
      icon: item.icon,
      checked: item.checked
    }))

    // console.log(data)
    return data
  }
)