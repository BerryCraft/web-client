import Info from '@/components/info/Info'
import News from '@/components/news/News'
import Meta from '@/components/page/Meta'
import DiscordApiHandler from '@/external/discord/DiscordApiHandler'
import VkApiHandler from '@/external/vk/VkApiHandler'
import RootLayout from '@/layouts/root.layout'
import newsService from '@/services/newsService'
import styles from '@/styles/index.module.scss'
import IPost from '@/types/structs/IPost'
import { GetStaticProps } from 'next'

interface Props {
	posts: IPost[]
	vkMembers: number
	discordMembers: number
}
const HomePage = ({ posts, vkMembers, discordMembers }: any) => {
	return (
		<RootLayout>
			<Meta title='BerryCraft' description='BerryCraft' />
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<News posts={posts.data} />
					<Info
						vkMembersCount={vkMembers}
						discordMembersCount={discordMembers}
					/>
				</div>
			</div>
		</RootLayout>
	)
}

export default HomePage

export const getStaticProps: GetStaticProps = async ctx => {
	let posts = await newsService.getAllPosts()
	let vkMembers = await VkApiHandler.countGroupMembers()
	let discordMembers = await DiscordApiHandler.getServerMembers()
	// console.log(posts, vkMembers, discordMembers)
	return {
		props: {
			posts,
			vkMembers,
			discordMembers,
		},
	}
}
