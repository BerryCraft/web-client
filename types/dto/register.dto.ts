import { LoginDTO } from './login.dto'

export interface RegisterDTO extends LoginDTO {
	username: string
	login: string
}
