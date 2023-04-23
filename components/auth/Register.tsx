import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import styles from '@/styles/components/auth/login.module.scss'
import { RegisterDTO } from '@/types/dto/register.dto'
import { SubmitHandler, useForm } from 'react-hook-form'
const Register = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register: reg } = useActions()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterDTO>({
		mode: 'onChange',
	})
	const handleRegister: SubmitHandler<RegisterDTO> = data => {
		reg(data)
		reset()
	}

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleRegister)}>
				<div className='field__title'>Ник</div>
				<input
					type='text'
					placeholder='Ник'
					{...register('username', {
						required: 'username is required',
						minLength: {
							value: 3,
							message: `username should be greater than 8 symbols`,
						},
					})}
				/>
				{errors.username && <p>{errors.username.message}</p>}

				<div className='field__title'>Почта</div>
				<input
					type='email'
					placeholder='Почта'
					{...register('email', {
						required: 'email is required',
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}

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

export default Register
