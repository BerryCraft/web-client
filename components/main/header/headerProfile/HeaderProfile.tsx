'use client'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { User } from '@/types/entities/user.entity'
import Link from 'next/link'
import SignUp from '../signUp/SignUp'
import styles from './headerProfile.module.scss'
const AuthButtons = () => {
	const currentUser: User | null = useTypedSelector(state => state.user.user)
	return <>{!currentUser ? <SignUp /> : 'user'}</>
}

export default AuthButtons