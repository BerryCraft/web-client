import Meta from '@/components/page/Meta'
import Rules from '@/components/rules/Rules'
import RootLayout from '@/layouts/root.layout'
import styles from '@/styles/rules.module.scss'

const RulesPage = () => {
	return (
		<RootLayout>
			<Meta
				title='BerryCraft | Rules'
				description='BerryCraft | Правила Сервера'
			/>
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<Rules />
				</div>
			</div>
		</RootLayout>
	)
}

export default RulesPage
