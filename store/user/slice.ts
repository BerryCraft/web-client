import { User } from '@/types/entities/user.entity'
import { getStoredLocal } from '@/utils/localStorage'
import { createSlice } from '@reduxjs/toolkit'
import { getNewTokens, login, logout, register } from './actions'

type InitialState = {
	user: User | null
	isLoading: boolean
	error: object | null | unknown
}

const initState: InitialState = {
	user: getStoredLocal('user'),
	isLoading: false,
	error: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		})
		builder.addCase(register.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = action.payload.user
		})
		builder.addCase(login.pending, state => {
			state.isLoading = true
		})
		builder.addCase(login.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload
		})
		builder.addCase(login.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = action.payload.user
		})
		builder.addCase(logout.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = null
		})
		builder.addCase(getNewTokens.fulfilled, (state, action) => {
			state.user = action.payload.user
		})
	},
})
