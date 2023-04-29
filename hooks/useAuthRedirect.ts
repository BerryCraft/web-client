import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAutheficatedUser } from './useAutheficatedUser'

export const useAuthRedirect = () => {
	const { user } = useAutheficatedUser()
	const { replace } = useRouter()

	useEffect(() => {
		if (user) replace('/')
	}, [user])
}
