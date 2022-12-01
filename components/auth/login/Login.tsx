'use client'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './login.module.scss'
import '@/styles/form.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import authService from '@/services/authService'
import api from '@/config/api/api.config'
import { useActions } from '@/hooks/useActions'

import { User } from '@/types/entities/user.entity'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useRouter } from 'next/navigation'

const Login = () => {
	const { login } = useActions()
	const loggedIn = useTypedSelector(state => state.user.user)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginDTO>()
	const router = useRouter()
	const handleLogin: SubmitHandler<LoginDTO> = async (dto: LoginDTO) => {
		console.log(dto)
		const user: { user: User; accesToken: string } = await authService.login(
			dto
		)

		login(user.user)
		router.push('/')
	}

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
