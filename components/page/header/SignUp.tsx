import Link from 'next/link'
import styles from '@/styles/components/page/header/signup.module.scss'
const SignUp = () => {
	return (
		<div className={styles.buttons}>
			<button>
				<Link href={'/auth/register'}>Регистрация</Link>
			</button>
			<div></div>
			<button>
				<Link href={'/auth/login'}>Войти</Link>
			</button>
		</div>
	)
}

export default SignUp
