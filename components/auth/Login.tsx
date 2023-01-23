import styles from '@/styles/components/auth/login.module.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const Login = () => {
	const [error, setError] = useState(false)
	const handleLogin: SubmitHandler<LoginDTO> = async (dto: LoginDTO) => {
		console.log(dto)
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDTO>()
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleLogin)}>
				<div className='field__title'>Логин</div>
				<input
					type='text'
					placeholder='Логин'
					{...register('login', { required: true })}
				/>
				<div className='field__title'>Пароль</div>
				<input
					type='password'
					placeholder='Пароль'
					{...register('password', { required: true })}
				/>
				<button type='submit' className='login__button'>
					Войти
				</button>
			</form>
			{/* errors */}

			{/* <div className={styles.errors}>
				<div>Login</div>
				<div>Password</div>
			</div> */}

			{/* errors */}
		</div>
	)
}

export default Login
