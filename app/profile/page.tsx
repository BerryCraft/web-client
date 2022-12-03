import Profile from '@/components/profile/Profile'
import { images } from '@/helpers/imageLoader'
import styles from './profile.module.scss'

const ProfilePage = () => {
	return (
		<div className={styles.background}>
			<div className={styles.wrapper}>
				<Profile/>
			</div>
		</div>
	)
}

export default ProfilePage
