import Meta from '@/components/page/Meta'
import Profile from '@/components/profile/Profile'
import RootLayout from '@/layouts/root.layout'
import styles from '@/styles/profile.module.scss'
import useUserStore from '@/zu-store/user.slice'

const ProfilePage = () => {
	const currentUser = useUserStore(state => state.currentUser) 	
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
