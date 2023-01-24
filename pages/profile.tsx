import Meta from '@/components/page/Meta'
import Profile from '@/components/profile/Profile'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import RootLayout from '@/layouts/root.layout'
import styles from '@/styles/profile.module.scss'

const ProfilePage = () => {
	const currentUser = useTypedSelector(state => state.user.user)
	return (
		<RootLayout>
			<Meta
				title='BerryCraft | Profile'
				description='BerryCraft | Профиль Игрока'
			/>
			<div className={styles.background}>
				<div className={styles.wrapper}>{currentUser && <Profile />}</div>
			</div>
		</RootLayout>
	)
}

export default ProfilePage
