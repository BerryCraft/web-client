'use client'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './register.module.scss'
import '@/styles/register-form.scss'
import { RegisterDTO } from '@/types/dto/register.dto'
import authService from '@/services/authService'
import api from '@/config/api/api.config'
import { useActions } from '@/hooks/useActions'

import { User } from '@/types/entities/user.entity'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const Register = () => {
  const { login } = useActions()
  const loggedIn = useTypedSelector(state => state.user.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDTO>()
  const router = useRouter()
  const handleRegister: SubmitHandler<RegisterDTO> = async (
    dto: RegisterDTO
  ) => {
    console.log(dto)
    const user: { user: User; accesToken: string } = await authService.register(
      dto
    )
    Cookies.set('user', JSON.stringify(user), { expires: 120 })
    login(user.user)
    router.push('/')
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="field__title">Логин</div>
        <input
          type="text"
          placeholder="Логин"
          {...register('login', { required: true })}
        />
        <div className="field__title">Пароль</div>
        <input
          type="password"
          placeholder="Пароль"
          {...register('password', { required: true })}
        />
        <div className="field__title">Email</div>
        <input
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />

        <button type="submit">Регистрация</button>
      </form>
      {/* errors */}

      {/* <div className={styles.errors}>
				<div>Login</div>
				<div>Password</div>
			</div> */}

      {/* errors */}
    </div>
  )
}

export default Register
