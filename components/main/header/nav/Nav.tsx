import styles from './nav.module.scss'
const Nav = () => {
	return (
		<div className={styles.nav}>
			<div className={styles.wrapper}>
				<nav>
					<ul>
						<li>Личный Кабинет</li>
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
