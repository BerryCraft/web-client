import styles from '@/styles/components/news/news.module.scss'
import IPost from '@/types/structs/IPost'
import Link from 'next/link'

const News = () => {
	// for now
	const posts = [] as any[]
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Новости</div>
			<div className={styles.field}>
				{posts.map((post: IPost) => {
					return (
						<div className={styles.news__wrapper} key={post.id}>
							<div className={styles.news__title}>
								<Link href={`/news/${post.id}`}>
									<h2>{post.title}</h2>
								</Link>
							</div>
							<div className={styles.news__content}>
								<p>{post.content}</p>
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default News
