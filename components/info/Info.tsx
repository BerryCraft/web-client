import styles from '@/styles/components/info/info.module.scss'

const Info = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.download}>
				<button>Скачать лаунчер</button>
			</div>
			<div className={styles.monitoring}>
				<div className={styles.title}>Мониторинг</div>
				<div className={styles.berrycraft}>
					<div className={styles.server__title}>BerryCraft</div>
					<div className={styles.online}>0 из 100</div>
				</div>
			</div>
			<div className={styles.groups}>
				<div className={styles.vk}>Группа ВК</div>
				<div className={styles.discord}>Группа ДС</div>
			</div>
		</div>
	)
}

export default Info
