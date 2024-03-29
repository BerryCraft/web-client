import styles from '@/styles/components/profile/profile.module.scss'

import { useActions } from '@/hooks/useActions'
import { useAutheficatedUser } from '@/hooks/useAutheficatedUser'
import skinService from '@/services/skinService'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

const Profile = () => {
	const { user: userState } = useAutheficatedUser()
	const router = useRouter()
	const { logout } = useActions()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<any>()
	const handle: SubmitHandler<any> = async (image: FileList) => {
		console.log(image)
		const file = await skinService.skin(image)
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.skin}>
				<div className={styles.title}>Скин</div>
				<div className={styles.field}></div>
				<form onSubmit={handleSubmit(handle)}>
					<div className={styles.upload}>
						<p>Смена скина</p>
						<div>
							<input
								type='file'
								accept='image/png'
								id='file'
								className={styles.input}
								{...register('file', { required: true })}
							/>
							<label htmlFor='file' className={styles.button}>
								Выберите файл
							</label>
						</div>
					</div>
					<div className={styles.upload__button}>
						<button type='submit' className={styles.button}>
							Загрузить
						</button>
					</div>
				</form>
			</div>
			<div className={styles.data}>
				<div className={styles.title}>
					<p>{userState!.login}</p>
				</div>
				<div className={styles.field}>
					<p>Логин: {userState!.login}</p>
					<p>Почта: {userState!.email}</p>
					<p>Дата регистрации: </p>
					<p>Статус: </p>
				</div>
				<button
					onClick={e => {
						logout()
						router.replace('/')
					}}
					className={styles.logout}
				>
					Выйти из аккаунта
				</button>
			</div>
		</div>
	)
}

export default Profile
