import { images } from '@/helpers/imageLoader'
import styles from '@/styles/components/info/info.module.scss'
import Image from 'next/image'

type Props = {
	vkMembersCount: any
	discordMembersCount: any
}

const Info = (props: Props) => {
	console.log('vk state')
	console.log(props.vkMembersCount)
	console.log('===========')
	console.log('discord state')
	console.log(props.discordMembersCount)
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
				{/* VK */}
				<div className={styles.vk}>
					Группа ВК <br />
					<div className={styles.vk__inner}>
						<div className={styles.vk__icon}>
							<Image alt='vk icon' src={images.vkIcon} />
						</div>
						<div className={styles.vk__desc}>
							<h3>BerryCraft</h3>
							<div className='vts'>
								{vkApiError ? 'Api Error' : props.vkMembersCount.response.count}
							</div>
						</div>
					</div>
				</div>
				{/* VK END */}

				{/* DISCORD */}
				<div className={styles.discord}>
					Группа ДС <br />
					<div className={styles.discord__inner}>
						<div className={styles.discord__icon}>
							<Image src={images.discordIcon} alt='discord icon' />
						</div>
						<div className={styles.discord__desc}>
							<h3>BerryCraft</h3>
							<div>
								<span className='dts'>{props.discordMembersCount}</span>
							</div>
						</div>
					</div>
				</div>
				{/* DISCORD END */}
			</div>
		</div>
	)
}

export default Info
