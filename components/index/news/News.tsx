import { images } from '@/helpers/imageLoader'
import newsService from '@/services/newsService'
import Link from 'next/link'
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react'
import styles from './news.module.scss'
const News = async () => {
  const posts = await newsService.getAllPosts()
  posts.reverse()

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Новости</div>
      <div className={styles.field}>
        {posts.map((post: { id: number; title: string; content: string }) => {
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
