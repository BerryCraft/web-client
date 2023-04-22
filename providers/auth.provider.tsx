import { FC, PropsWithChildren } from 'react'

const AuthProvider: FC<PropsWithChildren<unknown>> = children => {
	return <>{children}</>
}

export default AuthProvider
