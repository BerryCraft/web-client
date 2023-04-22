import { User } from '@/types/entities/user.entity'
import { createSlice } from '@reduxjs/toolkit'
import { getNewTokens, login, logout, register } from './actions'

type InitialState = {
	user: User | null
	isLoading: boolean
}

const initState: InitialState = {
	user: localStorage.getItem('user')
		? JSON.parse(localStorage.getItem('user') as string)
		: null,
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		})
		builder.addCase(register.rejected, state => {
			state.isLoading = false
		})
		builder.addCase(register.fulfilled, (state, action) => {
			state.isLoading = false
			state.user = action.payload.user
		})
		builder.addCase(login.pending, state => {
			state.isLoading = true
		})
		builder.addCase(login.rejected, state => {
			state.isLoading = false
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
