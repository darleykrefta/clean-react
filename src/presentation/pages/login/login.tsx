import * as React from 'react'

import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

import Context from '@/presentation/contexts/form/form-context'

import Styles from './login-styles.scss'
import { Validation } from '@/presentation/protocols/validation'

type LoginProps = {
  validation: Validation
}

const Login: React.FC<LoginProps> = ({ validation }: LoginProps) => {
  const [state, setState] = React.useState({
    isLoading: false,
    email: '',
    password: '',
    errors: {
      email: 'Campo obrigatório',
      password: 'Campo obrigatório',
      main: ''
    }
  })

  React.useEffect(() => {
    validation.validate({ email: state.email, password: state.password })
  }, [state.email, state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />

      <Context.Provider value={{ state, setState, errors: state.errors }}>
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
