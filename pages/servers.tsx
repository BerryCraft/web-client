import Meta from '@/components/page/Meta'
import Servers from '@/components/servers/Servers'
import styles from '@/styles/servers.module.scss'

const ServersPage = () => {
	return (
		<>
			<Meta title='BerryCraft | Servers' description='BerryCraft | Сервера' />
			<div className={styles.background}>
				<div className={styles.wrapper}>
					<Servers />
				</div>
			</div>
		</>
	)
}

export default ServersPage
