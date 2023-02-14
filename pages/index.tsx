import Info from '@/components/info/Info'
import News from '@/components/news/News'
import Meta from '@/components/page/Meta'
import DiscordApiHandler from '@/external/discord/DiscordApiHandler'
import VkApiHandler from '@/external/vk/VkApiHandler'
import RootLayout from '@/layouts/root.layout'
import newsService from '@/services/newsService'
import styles from '@/styles/index.module.scss'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const HomePage = ({
	posts,
	vkMembers,
	discordMembers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	return (
		<RootLayout>
			<Meta title='BerryCraft' description='BerryCraft' />
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<News posts={posts} />
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

export const getServerSideProps: GetServerSideProps = async ctx => {
	let posts = await newsService.getAllPosts()
	let vkMembers = await VkApiHandler.countGroupMembers()
	let discordMembers = await DiscordApiHandler.getServerMembers()
	return {
		props: {
			posts,
			vkMembers,
			discordMembers,
		},
	}
}
