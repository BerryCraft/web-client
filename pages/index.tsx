import Info from '@/components/info/Info'
import News from '@/components/news/News'
import Meta from '@/components/page/Meta'
import RootLayout from '@/layouts/root.layout'
import styles from '@/styles/index.module.scss'

const HomePage = () => {
	return (
		<RootLayout>
			<Meta title='BerryCraft' description='BerryCraft' />
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
