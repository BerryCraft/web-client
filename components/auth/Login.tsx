import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import styles from '@/styles/components/auth/login.module.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import { SubmitHandler, useForm } from 'react-hook-form'
const Login = () => {
	const { isLoading } = useAuth()
	const { login } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<LoginDTO>({
		mode: 'onChange',
	})
	const handleLogin: SubmitHandler<LoginDTO> = data => {
		login(data)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleLogin)}>
				<div className='field__title'>Логин</div>
				<input
					type='text'
					placeholder='Логин'
					{...register('login', { required: 'login is required' })}
				/>
				{errors.login && <p>{errors.login.message}</p>}
				<div className='field__title'>Пароль</div>
				<input
					type='password'
					placeholder='Пароль'
					{...register('password', { required: 'password is required' })}
				/>
				{errors.login && <p>{errors.login.message}</p>}

				<button type='submit' className='login__button'>
					Войти
				</button>
			</form>
		</div>
	)
}

export default Login
