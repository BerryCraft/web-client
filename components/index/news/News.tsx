import { images } from '@/helpers/imageLoader'
import styles from './news.module.scss'
const News = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Новости</div>
			<div className={styles.field}></div>
		</div>
	)
}

export default News
