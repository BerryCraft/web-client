import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
	user: {} | null
}

const initState: InitialState = {
	user: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState: initState,
	reducers: {
		login: (state, action: PayloadAction<{}>) => {
			state.user = action.payload
		},
		logout: state => {
			state.user = null
		},
	},
})
