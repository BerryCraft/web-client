import { IAuthResponse, ITokens } from '@/types/structs/auth/auth.types'
import Cookies from 'js-cookie'

export const saveTokensStorage = (tokens: ITokens) => {
	Cookies.set('accessToken', tokens.accessToken)
	Cookies.set('refreshToken', tokens.refreshToken)
}
export const removeTokensStorage = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
	localStorage.removeItem('user')
}

export const saveCurrentUserToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const getAccessToken = () => {
	const accessToken = Cookies.get('accessToken')
	return accessToken || null
}

export const getUserFromStorage = () => {
	return JSON.parse(localStorage.getItem('user') || '{}')
}
