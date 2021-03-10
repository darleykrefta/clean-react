import React, { memo } from 'react'

import { Logo } from '@/presentation/components'

import Styles from './login-header-styles.scss'

export const LoginHeader: React.FC = memo(() => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  )
})

LoginHeader.displayName = 'LoginHeader'
