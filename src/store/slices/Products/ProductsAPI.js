import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async function () {
		const { data: productsData } = await axios.get("http://localhost:3000/products")

		const data = productsData.map(prod => ({
			id: prod.id.toString(),
			title: prod.title,
			img: prod.img,
			catalogName: prod.catalogName,
			description: prod.description,
			weight: prod.weight,
			cost: prod.cost,
		}))

		// console.log(data)
		return data
	}
)