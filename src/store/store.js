import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/Categories/CategoriesSlice";
import { productsReducer } from "./slices/Products/ProductsSlice";
import { usersReducer } from "./slices/Users/UsersSlice";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
	key: 'shashlik.ru',
	storage,
}

const rootReducer = combineReducers({
	users: usersReducer,
	products: productsReducer,
	categories: categoriesReducer,

})

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
export default store