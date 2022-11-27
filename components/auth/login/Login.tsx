'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './login.module.scss'
import '@/styles/form.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import authService from '@/services/authService'
import api from '@/config/api/api.config'

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

	const handleLogin: SubmitHandler<LoginDTO> = async (dto: LoginDTO) => {
		console.log(dto)
		const user = await authService.login(dto)
		console.log(user)
	}
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleLogin)}>
				<input
					type='text'
					placeholder='Логин'
					{...register('login', { required: true })}
				/>
				<input
					type='password'
					placeholder='Паполь'
					{...register('password', { required: true })}
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
