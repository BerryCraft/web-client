import { images } from '@/helpers/imageLoader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import HeaderProfile from './headerProfile/HeaderProfile'
import styles from './header.module.scss'
const Header = () => {
	const pathName = usePathname()
	const getPageName = () => {
		if (pathName == '/') {
			return 'Главная'
		} else if (pathName == '/auth/login') {
			return 'Авторизация'
		} else if (pathName == '/auth/register') {
			return 'Регистрация'
		}
	}
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href={'/'}>
						<Image src={images.logo} alt={'BerryCraft logo'} />
					</Link>
				</div>
				<div className={styles.title}>{getPageName()}</div>
				<HeaderProfile />
			</div>
		</div>
	)
}

export default Header
