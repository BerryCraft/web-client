import api from '@/config/api/api.config'
import { LoginDTO } from '@/types/dto/login.dto'
import { RegisterDTO } from '@/types/dto/register.dto'

class AuthService {
	async login(body: LoginDTO) {
		return await api.post('/auth/login', body)
	}
	async register(body: RegisterDTO) {
		return await api.post('/auth/register', body)
	}
}

const authService = new AuthService()

export default authService
