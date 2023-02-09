import Info from '@/components/info/Info'
import News from '@/components/news/News'
import Meta from '@/components/page/Meta'
import discordFetchServerMembers from '@/external/discord/discordApi'
import RootLayout from '@/layouts/root.layout'
import newsService from '@/services/newsService'
import styles from '@/styles/index.module.scss'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useEffect } from 'react'

const HomePage = ({
  posts,
  members,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('members')
  console.log(discordFetchServerMembers())
  return (
    <RootLayout>
      <Meta title="BerryCraft" description="BerryCraft" />
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <News posts={posts} />
          <Info />
        </div>
      </div>
    </RootLayout>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async ctx => {
  let posts = await newsService.getAllPosts()
  //   let members = await discordFetchServerMembers()
  return {
    props: {
      posts,
      //   members,
    },
  }
}
