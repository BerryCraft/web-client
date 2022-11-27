import styles from './footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.authors}>
				<span>&copy;</span> BerryCraft {new Date().getFullYear()}
			</div>
		</div>
	)
}

export default Footer
