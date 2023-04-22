import { useActions } from '@/hooks/useActions'
import { LoginDTO } from '@/types/dto/login.dto'
import { SubmitHandler, useForm } from 'react-hook-form'

const Login = () => {
	const { login } = useActions()

	const { register, handleSubmit, formState, reset } = useForm<LoginDTO>({
		mode: 'onChange',
	})
	const handleLogin: SubmitHandler<LoginDTO> = data => {
		login(data)
		reset()
	}

	return <div>Login</div>
}

export default Login
