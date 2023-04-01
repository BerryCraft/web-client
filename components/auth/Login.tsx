import authService from '@/services/authService'
import useUserStore from '@/store/user.slice'
import styles from '@/styles/components/auth/login.module.scss'
import { LoginDTO } from '@/types/dto/login.dto'
import { User } from '@/types/entities/user.entity'
import Cookies from 'js-cookie'
import router from 'next/router'

import { SubmitHandler, useForm } from 'react-hook-form'

const Login = () => {
	const login = useUserStore(state => state.login)
	const handleLogin: SubmitHandler<LoginDTO> = async (dto: LoginDTO) => {
		console.log(dto)
		const user: { user: User; accesToken: string } = await authService.login(
			dto
		)
		Cookies.set('user', JSON.stringify(user), { expires: 1200 })
		login(user.user)
		router.push('/')
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
