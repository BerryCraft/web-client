import { getAccessToken, removeTokensStorage } from '@/services/auth.helper'
import authService from '@/services/authService'
import axios from 'axios'
import { errorCatch, getContentType } from './api.helper'
//! authorized axios instance
export const axiauth = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
})
//! request interseptor for auth checking

axiauth.interceptors.request.use(async config => {
	const accessToken = getAccessToken()

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

//! response interseptor for
axiauth.interceptors.response.use(
	config => config,
	async error => {
		// "E_" - error prefix
		const E_JWT_EXPIRED = errorCatch(error) === 'jwt expired'
		const E_JWT_MUST_BE_PROVIDED = errorCatch(error) === 'jwt must be provided'

		const originalRequest = error.config

		if (
			error.response.status === 401 ||
			E_JWT_EXPIRED ||
			(E_JWT_MUST_BE_PROVIDED && error.config && !error.config._isRetry)
		) {
			originalRequest._isRetry = true

			try {
				// get new tokens
				await authService.getNewTokens()
				return axiauth.request(originalRequest)
			} catch (error) {
				if (E_JWT_EXPIRED) {
					// delete tokens
					removeTokensStorage()
				}
			}
		}
		throw error
	}
)
