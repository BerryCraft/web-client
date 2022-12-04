'use client'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import styles from './nav.module.scss'
const Nav = () => {
	const currentUser: User | null = useTypedSelector(state => state.user.user)
	var profileLink = '/profile'
	if (!currentUser) profileLink = '/auth/login'
	return (
		<div className={styles.nav}>
			<div className={styles.wrapper}>
				<nav>
					<ul>
						<li><Link href={profileLink}>Личный Кабинет</Link></li>
						<li>Правила</li>
						<li>Сервера</li>
						<li>Магазин предметов</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Nav
