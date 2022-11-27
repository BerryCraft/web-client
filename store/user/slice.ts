import { User } from '@/types/entities/user.entity'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	user: User | null
}

const initState: InitialState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		login: (state, action: PayloadAction<User>) => {
			console.log(action.payload)
			state.user = { ...action.payload }
			console.log(state)
		},
		logout: state => {
			state.user = null
		},
	},
})
