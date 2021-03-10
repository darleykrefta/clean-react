import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Spinner } from '@/presentation/components'

import '@/presentation/styles/global.scss'

const Login = lazy(async () => await import('../../pages/login/login'))

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  )
}
