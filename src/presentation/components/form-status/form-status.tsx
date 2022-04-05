import React, { useContext } from 'react'

import { Spinner } from '@/presentation/components'

import Styles from './form-status-styles.scss'

import Context from '@/presentation/contexts/form/form-context'

export const FormStatus: React.FC = () => {
  const context = useContext(Context)

  return (
    <div className={Styles.errorWrap} data-testid="error-wrap">
      {context.state.isLoading ? <Spinner className={Styles.spinner} /> : null}

      {context.errors.main ? <span className={Styles.error}>{context.errors.main}</span> : null}
    </div>
  )
}
