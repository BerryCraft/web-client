import { useActions } from '@/hooks/useActions'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { useAutheficatedUser } from '@/hooks/useAutheficatedUser'
import styles from '@/styles/components/auth/login.module.scss'
import { RegisterDTO } from '@/types/dto/register.dto'
import Error from '@/ui/Error'
import { SubmitHandler, useForm } from 'react-hook-form'
const Register = () => {
	useAuthRedirect()

	const { error } = useAutheficatedUser()
	const { login, register: reg } = useActions()
	console.log('hello')
	console.log(error)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegisterDTO>({
		mode: 'onChange',
	})
	const handleRegister: SubmitHandler<RegisterDTO> = data => {
		try {
			reg(data)
		} catch (error: any) {
			console.log(`error: ${error}`)
		} finally {
			reset()
		}
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
				{errors.username && <Error message={errors.username.message} />}

				<div className='field__title'>Почта</div>
				<input
					type='email'
					placeholder='Почта'
					{...register('email', {
						required: 'email is required',
					})}
				/>
				{errors.email && <Error message={errors.email.message} />}

				<div className='field__title'>Логин</div>

				<input
					type='text'
					placeholder='Логин'
					{...register('login', { required: 'login is required' })}
				/>
				{errors.login && <Error message={errors.login.message} />}

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
				{errors.password && <Error message={errors.password.message} />}

				<button type='submit' className='login__button'>
					Зарегистрироваться
				</button>
				{error && <Error message={error.message} />}
			</form>
		</div>
	)
}

export default Register
