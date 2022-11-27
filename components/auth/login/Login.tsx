'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './login.module.scss'
import '@/styles/form.scss'
import { LoginDTO } from '@/types/dto/login.dto'

const Login = () => {
	const [loginDTO, setLoginDTO] = useState<LoginDTO>({
		login: '',
		password: '',
	})

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
				<input type='text' placeholder='Логин' />
				<input type='password' placeholder='Паполь' />
				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}

export default Login
