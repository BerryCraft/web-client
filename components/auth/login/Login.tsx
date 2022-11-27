'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './login.module.scss'
import '@/styles/form.scss'
import { LoginDTO } from '@/types/dto/login.dto'

const Login = () => {
	// const [loginDTO, setLoginDTO] = useState<LoginDTO>({
	// 	login: '',
	// 	password: '',
	// })

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDTO>()

	const handleLogin = (dto: LoginDTO) => {
		console.log(dto)
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleLogin)}>
				<input
					type='text'
					placeholder='Логин'
					{...(register('login'), { required: true })}
				/>
				<input
					type='password'
					placeholder='Паполь'
					{...(register('password'), { required: true })}
				/>
				<button type='submit'>Войти</button>
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
