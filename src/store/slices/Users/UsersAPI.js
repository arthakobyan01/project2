import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
	"users/fetchUsers",
	async function () {
		const { data: usersData } = await axios.get('http://localhost:3000/users')

		const data = usersData.map(user => ({
			id: user.id.toString(),
			name: user.name,
			surname: user.surname,
			email: user.email,
			phone: user.phone,
			password: user.password,
			choosenProductsId: user.choosenProductsId,
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd7SeoDA2PxCcdbtBxBAHYw1xiP_CpXmRFyKSyyiC2Pr_A_vf34p816fwajWCCR9eHBo&usqp=CAU'
		}))

		console.log(data)
		return data
	}

) 