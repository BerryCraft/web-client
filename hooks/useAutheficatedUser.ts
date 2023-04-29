import { useTypedSelector } from './useTypedSelector'

export const useAutheficatedUser = () => useTypedSelector(state => state.user)
