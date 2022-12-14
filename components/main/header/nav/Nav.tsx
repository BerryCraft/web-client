'use client'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import styles from './nav.module.scss'
const Nav = () => {
  const currentUser: User | null = useTypedSelector(state => state.user.user)

  return (
    <div className={styles.nav}>
      <div className={styles.wrapper}>
        <nav>
          <ul>
            <li>
              <Link href={!currentUser ? '/auth/login' : '/profile'}>
                Личный Кабинет
              </Link>
            </li>
            <li>Правила</li>
            <li>Сервера</li>
            <li>Магазин предметов</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
