import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { userSlice } from './user/slice'

const rootReducer = combineReducers({ user: userSlice.reducer })

const persistConfig = {
	key: 'root',
	storage,
	timeout: 700,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
})

export type TypeRootState = ReturnType<typeof rootReducer>
