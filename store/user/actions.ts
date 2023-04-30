import { errorCatch } from '@/config/api/api.helper'
import { removeTokensStorage } from '@/services/auth.helper'
import authService from '@/services/authService'
import { LoginDTO } from '@/types/dto/login.dto'
import { RegisterDTO } from '@/types/dto/register.dto'
import { IAuthResponse } from '@/types/structs/auth/auth.types'
import { createAsyncThunk } from '@reduxjs/toolkit'
// register
export const register = createAsyncThunk<IAuthResponse, RegisterDTO>(
	'auth/register',

	async (data, thunkApi) => {
		try {
			const response = authService.register(data)
			return response
		} catch (error: any) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
// login
export const login = createAsyncThunk<IAuthResponse, LoginDTO>(
	'auth/login',

	async (data, thunkApi) => {
		try {
			const response = authService.login(data)
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)
// logout
export const logout = createAsyncThunk('auth/logout', async () => {
	removeTokensStorage()
})

// get new tokens
export const getNewTokens = createAsyncThunk<IAuthResponse>(
	'auth/tokens',

	async (_, thunkApi) => {
		try {
			const response = authService.getNewTokens()
			return response
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') thunkApi.dispatch(logout())

			return thunkApi.rejectWithValue(error)
		}
	}
)
