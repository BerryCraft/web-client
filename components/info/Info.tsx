import styles from '@/styles/components/info/info.module.scss'

type Props = {
	vkMembersCount: any
	discordMembersCount: any
}

const Info = (props: Props) => {
	console.log('vk state')
	console.log(props.vkMembersCount)
	let vkApiError = false
	if (props.vkMembersCount.hasOwnProperty('error')) vkApiError = true
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
				<div className={styles.vk}>
					Группа ВК <br />
					<span>
						{vkApiError ? 'Api Error' : props.vkMembersCount.response.count}
					</span>
				</div>
				<div className={styles.discord}>
					Группа ДС <span>{props.discordMembersCount}</span>{' '}
				</div>
			</div>
		</div>
	)
}

export default Info
