import styles from '@/styles/components/page/header/headerprofile.module.scss'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import SignUp from './SignUp'
const AuthButtons = () => {
	var currentUser: User | null = useTypedSelector(state => state.user.user)
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
