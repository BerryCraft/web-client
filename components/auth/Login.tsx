import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import styles from '@/styles/components/auth/login.module.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import { SubmitHandler, useForm } from 'react-hook-form'
const Login = () => {
	useAuthRedirect()
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

				<div className='field__title'>Пароль</div>
				<input
					type='password'
					placeholder='Пароль'
					{...register('password', {
						required: 'password is required',
						minLength: {
							value: 8,
							message: `pasword should be greater than 8 symbols`,
						},
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}

				<button type='submit' className='login__button'>
					Войти
				</button>
			</form>
		</div>
	)
}

export default Login
