import * as React from 'react'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './login-styles.scss'

const Login: React.FC = () => {
  const state = React.useMemo(
    () => ({
      isLoading: false
    }),
    []
  )

  const errors = React.useMemo(
    () => ({
      email: 'Campo obrigatório',
      password: 'Campo obrigatório',
      main: ''
    }),
    []
  )

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, errors }}>
        <form className={Styles.form}>
          <h2>Login</h2>

          <Input type="email" name="email" placeholder="Digite seu e-mail" />

          <Input type="password" name="password" placeholder="Digite sua senha" />

          <button className={Styles.submit} type="submit" disabled>
            Entrar
          </button>

          <span className={Styles.link}>Criar conta</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default Login
