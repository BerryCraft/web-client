import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/slice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
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
