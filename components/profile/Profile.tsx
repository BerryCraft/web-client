'use client'
import { images } from '@/helpers/imageLoader'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import styles from './profile.module.scss'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useActions } from '@/hooks/useActions'
const Profile = () => {
  const user = Cookies.get('user') && JSON.parse(Cookies.get('user')!)
  const userState: User | null = useTypedSelector(state => state.user.user)
  const router = useRouter()
  const { logout } = useActions()
  return !userState ? (
    router.push('/')
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.skin}>
        <div className={styles.title}>Скин</div>
        <div className={styles.upload}>
          <p>Смена скина</p>
          <div className={styles.button}>Загрузить</div>
        </div>
      </div>
      <div className={styles.data}>
        <div className={styles.title}>
          {!userState ? <p>Null</p> : <p>{userState.login}</p>}
        </div>
        <div className={styles.field}>
          <p>UserName: {userState!.login}</p>
          <p>Email: {userState!.email}</p>
        </div>
        <button
          onClick={e => {
            router.push('/')
            logout()
            Cookies.remove('user')
          }}
          className={styles.logout}
        >
          Выйти из аккаунта
        </button>
      </div>
    </div>
  )
}

export default Profile
