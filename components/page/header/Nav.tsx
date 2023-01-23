import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import styles from '@/styles/components/page/header/nav.module.scss'
const Nav = () => {
	const currentUser: User | null = useTypedSelector(state => state.user.user)

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
