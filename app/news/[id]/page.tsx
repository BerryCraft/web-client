import newsService from '@/services/newsService'
import React from 'react'
import styles from './news.module.scss'


const Post = async (params: { id: number }) => {
  const post = await newsService.getPost(params.id)
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