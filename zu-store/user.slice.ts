import { User } from '@/types/entities/user.entity'
import { create } from 'zustand'

interface UserStore {
  currentUser: User | null
  login: (credentials: User) => void
  logout: () => void
}

const useUserStore = create<UserStore>(set => ({
  currentUser: null,
  login: (user: User) =>
    set(state => ({
      currentUser: user,
    })),
  logout: () =>
    set(state => ({
      currentUser: null,
    })),
}))


export default useUserStore
