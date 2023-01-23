import Info from '@/components/info/Info'
import News from '@/components/news/News'
import RootLayout from '@/layouts/root.layout'
import styles from '@/styles/index.module.scss'

const HomePage = () => {
	return (
		<RootLayout>
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<News />
					<Info />
				</div>
			</div>
		</RootLayout>
	)
}

export default HomePage
