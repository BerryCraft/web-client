import styles from '@/styles/components/page/header/headerprofile.module.scss'

import useUserStore from '@/store/user.slice'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import SignUp from './SignUp'
const AuthButtons = () => {
	var currentUser: User | null = useUserStore(state => state.currentUser)
	return (
		<>
			{!currentUser ? (
				<SignUp />
			) : (
				<Link href={'/profile'}>
					<div className={styles.profile}>
						<p>{currentUser.login}</p>
					</div>
				</Link>
			)}
		</>
	)
}

export default AuthButtons
