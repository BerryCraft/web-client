import News from '@/components/index/news/News'
import { images } from '@/helpers/imageLoader'
import styles from './index.module.scss'

const HomePage = () => {
	return (
		<div className={styles.background}>
			<div className={styles.wrapper}>
				<News />
			</div>
		</div>
	)
}

export default HomePage
