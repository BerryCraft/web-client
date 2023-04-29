import styles from '@/styles/components/page/header/headerprofile.module.scss'

import { useAutheficatedUser } from '@/hooks/useAutheficatedUser'
import Link from 'next/link'
import SignUp from './SignUp'

const AuthButtons = () => {
	const { user: currentUser } = useAutheficatedUser()
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
