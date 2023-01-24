import newsService from '@/services/newsService'
import styles from '@/styles/components/news/news.module.scss'
import IPost from '@/types/structs/IPost'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'

type Props = {
	posts: IPost[]
}

const News = ({ posts }: Props) => {
	posts = posts.reverse()
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
