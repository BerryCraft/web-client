import Meta from '@/components/page/Meta'
import Rules from '@/components/rules/Rules'
import styles from '@/styles/rules.module.scss'

const RulesPage = () => {
	return (
		<>
			<Meta
				title='BerryCraft | Rules'
				description='BerryCraft | Правила Сервера'
			/>
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<Rules />
				</div>
			</div>
		</>
	)
}

export default RulesPage
