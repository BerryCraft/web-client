import { User } from '@/types/entities/user.entity'

export interface IUserState {
	email: string
	isAdmin: boolean
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuthResponse extends ITokens {
	user: User & {
		isAdmin: boolean
	}
}
