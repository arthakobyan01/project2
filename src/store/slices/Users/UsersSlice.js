import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./UsersAPI";


const usersSlice = createSlice({
	name: 'users',
	initialState: {
		usersData: [],
		currentUser: null,
		total: 0,

	},
	reducers: {
		login(state, { payload: { phone, password } }) {
			state.currentUser = state.usersData.find(el => el.phone === phone && el.password === password)
		},
		logOut(state) {
			state.currentUser = null
		},
		addProducts: (state, { payload }) => {
			const allFillteredItems = state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.filter(item => item.id !== payload.id)
			const filteredCart = state.currentUser.choosenProductsId.filter(item => item.id !== payload.id);
			const targetCartItem = state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.find(item => item.id === payload.id)
			const targetItem = state.currentUser.choosenProductsId.find(item => item.id === payload.id)
			if (targetItem && targetCartItem) {
				const updatedItem = { ...targetItem, count: targetItem.count += payload.count };
				const updatedCart = [...filteredCart, updatedItem]
				const updatedItems = { ...targetCartItem, count: targetCartItem.count += payload.count }
				const updatedCartItems = [...allFillteredItems, updatedItems]
				state.currentUser.choosenProductsId = updatedCart
				state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId = updatedCartItems
			} else {
				state.currentUser.choosenProductsId?.push({ ...payload })
				state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.push({ ...payload })
			}
		},
		calcTotal: (state) => {
			let total = 0
			state.currentUser.choosenProductsId.forEach(element => {
				total += parseInt(element.cost) * element.count
			})
			state.total = total
		},

		delProduct: (state, { payload }) => {
			state.currentUser.choosenProductsId = state.currentUser.choosenProductsId.filter(el => el.id !== payload)
			const delItem = state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.filter(el => el.id !== payload)
			state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId = delItem
		},
		incrementCount: (state, { payload }) => {
			state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.filter(el => el.id === payload).forEach(element => {
				element.count = element.count + 1
			})
			state.currentUser?.choosenProductsId?.filter(el => el.id === payload).forEach(element => {
				element.count = element.count + 1
			})
		},
		decrementCount: (state, { payload }) => {
			state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId.filter(el => el.id === payload).forEach(element => {
				element.count = element.count - 1
			})
			state.currentUser?.choosenProductsId?.filter(el => el.id === payload).forEach(element => {
				if (element.count > 1) {
					element.count = element.count - 1
				}
			})
		},
		inputValue: (state, { payload }) => {
			state.currentUser?.choosenProductsId?.forEach(element => {
				element.count = payload * 1
			})
		},
		confirmOrder: (state, { payload }) => {
			state.currentUser.choosenProductsId = []
			state.usersData.find(el => el.id === state.currentUser.id).choosenProductsId = []
		}
	},
	extraReducers: {
		[fetchUsers.fulfilled]: (state, { payload }) => {
			return {
				...state,
				usersData: [...payload]
			}
		}
	}
})

export const selectUsers = state => state.users
export const { login, logOut, addProducts, incrementCount, confirmOrder, inputValue, decrementCount, delProduct, calcTotal } = usersSlice.actions
export const usersReducer = usersSlice.reducer


