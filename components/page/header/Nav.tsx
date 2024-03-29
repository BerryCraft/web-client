import { useAutheficatedUser } from '@/hooks/useAutheficatedUser'
import styles from '@/styles/components/page/header/nav.module.scss'
import Link from 'next/link'
const Nav = () => {
	const { user: currentUser } = useAutheficatedUser()

	return (
		<div className={styles.nav}>
			<div className={styles.wrapper}>
				<nav>
					<ul>
						<li>
							<Link href={!currentUser ? '/auth/login' : '/profile'}>
								Личный Кабинет
							</Link>
						</li>
						<li>
							<Link href={'/rules'}>Правила</Link>
						</li>
						<li>
							<Link href={'/servers'}>Сервера</Link>
						</li>
						<li>Магазин предметов</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Nav
