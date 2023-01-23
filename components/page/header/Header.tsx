import { images } from '@/helpers/imageLoader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import styles from '@/styles/components/page/header/header.module.scss'
import HeaderProfile from './HeaderProfile'
const Header = () => {
	const pathName = usePathname()
	const getPageName = () => {
		if (pathName == '/') {
			return 'Главная'
		} else if (pathName == '/auth/login') {
			return 'Авторизация'
		} else if (pathName == '/auth/register') {
			return 'Регистрация'
		} else if (pathName == '/profile') {
			return 'Профиль'
		} else if (pathName == '/servers') {
			return 'Сервера'
		} else if (pathName == '/rules') {
			return 'Правила'
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
