import Meta from '@/components/page/Meta'
import Profile from '@/components/profile/Profile'
import styles from '@/styles/profile.module.scss'

const ProfilePage = () => {
	return (
		<>
			<Meta
				title='BerryCraft | Profile'
				description='BerryCraft | Профиль Игрока'
			/>
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<Profile />
				</div>
			</div>
		</>
	)
}

export default ProfilePage
