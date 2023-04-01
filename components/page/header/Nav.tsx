import useUserStore from '@/store/user.slice'
import styles from '@/styles/components/page/header/nav.module.scss'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
const Nav = () => {
	const currentUser: User | null = useUserStore(state => state.currentUser)

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
