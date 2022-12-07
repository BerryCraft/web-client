import Servers from '@/components/profile/Profile'
import { images } from '@/helpers/imageLoader'
import styles from './servers.module.scss'

const ServersPage = () => {
	return (
		<div className={styles.background}>
			<div className={styles.wrapper}>
				<Servers/>
			</div>
		</div>
	)
}

export default ServersPage
