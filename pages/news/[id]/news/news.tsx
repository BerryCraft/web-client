import styles from '@/styles/components/news/news.module.scss'

const NewsPage = () => {
	return (
		<div className={styles.news__wrapper}>
			<div className={styles.news__title}>{/* <h2>{post.title}</h2> */}</div>
			<div className={styles.news__content}>{/* <p>{post.content}</p> */}</div>
		</div>
	)
}

export default NewsPage
