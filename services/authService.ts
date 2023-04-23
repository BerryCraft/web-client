import { getContentType } from '@/config/api/api.helper'
import { axiauth } from '@/config/api/api.interceptor'
import { LoginDTO } from '@/types/dto/login.dto'
import { RegisterDTO } from '@/types/dto/register.dto'
import { IAuthResponse } from '@/types/structs/auth/auth.types'
import Cookies from 'js-cookie'
import { saveCurrentUserToStorage, saveTokensStorage } from './auth.helper'

class AuthService {
	async login(dto: LoginDTO) {
		const response = await axiauth.post<IAuthResponse>('/auth/login', dto)

		if (response.data.accessToken) saveCurrentUserToStorage(response.data)

		return response.data
	}

	async register(dto: RegisterDTO) {
		const response = await axiauth.post<IAuthResponse>('/auth/register', dto)

		if (response.data.accessToken) saveCurrentUserToStorage(response.data)

		return response.data
	}
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiauth.post<string, { data: IAuthResponse }>(
			process.env.SERVER_URL + '/auth/tokens',
			{ refreshToken },
			{ headers: getContentType() }
		)
		if (response.data.accessToken) saveTokensStorage(response.data)

		return response.data
	}
}

const authService = new AuthService()

export default authService
