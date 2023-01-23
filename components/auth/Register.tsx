import { RegisterDTO } from '@/types/dto/register.dto'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from '@/styles/components/auth/register.module.scss'
const Register = () => {
	const handleRegister: SubmitHandler<RegisterDTO> = async (
		dto: RegisterDTO
	) => {
		console.log(dto)
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterDTO>()
	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(handleRegister)}>
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
				<div className='field__title'>Email</div>
				<input
					type='email'
					placeholder='Email'
					{...register('email', { required: true })}
				/>

				<button type='submit'>Регистрация</button>
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

export default Register
