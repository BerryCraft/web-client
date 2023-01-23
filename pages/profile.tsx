import Profile from '@/components/profile/Profile'
import styles from '@/styles/profile.module.scss'

const ProfilePage = () => {
	return (
		<div className={styles.background}>
			<div className={styles.wrapper}>
				<Profile />
			</div>
		</div>
	)
}

export default ProfilePage
