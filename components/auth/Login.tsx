import { useActions } from '@/hooks/useActions'
import { useAutheficatedUser } from '@/hooks/useAutheficatedUser'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import useFirstRender from '@/hooks/useFirstRender'
import styles from '@/styles/components/auth/login.module.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import Error from '@/ui/Error'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
const Login = () => {
	useAuthRedirect()
	const { error, isLoading } = useAutheficatedUser()
	const { login } = useActions()
	const isFirstRender = useFirstRender()
	useEffect(() => {
		if (isFirstRender) {
			console.log('from UE')
			console.log(error)
		} else {
			console.log('reloaded')
		}
	}, [error])

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
				<div className='field__title'>Почта</div>
				<input
					type='email'
					placeholder='Почта'
					{...register('email', {
						required: 'email is required',
					})}
				/>
				{errors.email && <Error message={errors.email.message} />}
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
					Войти
				</button>
				{error && !isFirstRender && <Error message={error.message} />}
			</form>
		</div>
	)
}

export default Login
