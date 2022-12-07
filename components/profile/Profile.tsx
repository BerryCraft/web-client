'use client'
import { images } from '@/helpers/imageLoader'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import styles from './profile.module.scss'
import { parseCookies } from '../../helpers/'
import { useCookies } from 'react-cookie'

const Profile = () => {
	const [cookie, setCookie] = useCookies(['user'])
	const currentUser: User | null = useTypedSelector(state => state.user.user)
	return (
		<div className={styles.wrapper}>
			<div className={styles.skin}>
			<div className={styles.title}>Скин</div>
			<div className={styles.field}></div>
			<div className={styles.upload}>
				<p>Смена скина</p>
				<div className={styles.button}>Загрузить</div>
			</div>
			</div>
			<div className={styles.data}>
			<div className={styles.title}>{!currentUser ? <p>Null</p> : <p>{currentUser.login}</p>}</div>
			<div className={styles.field}>
				<p>UserName: {cookie.user.login}</p>
				<p>Email: {cookie.user.email}</p>
			</div>
			<button className={styles.logout}>
				Выйти из аккаунта
			</button>
			</div>
		</div>
	)
}



export default Profile