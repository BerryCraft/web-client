import newsService from '@/services/newsService'
import React from 'react'
import styles from './news.module.scss'
import { useSearchParams } from 'next/navigation'

const Post = async () => {
  const params = useSearchParams()
  const post = await newsService.getPost(+params.get('id')!)
  return (
    <div className={styles.news__wrapper}>
      <div className={styles.news__title}>
        <h2>{post.title}</h2>
      </div>
      <div className={styles.news__content}>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default Post
