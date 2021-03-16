import React, { useContext } from 'react'

import { Spinner } from '@/presentation/components'

import Styles from './form-status-styles.scss'

import Context from '@/presentation/contexts/form/form-context'

export const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)

  return (
    <div className={Styles.errorWrap} data-testid="error-wrap">
      {isLoading ? <Spinner className={Styles.spinner} /> : null}

      {errorMessage ? <span className={Styles.error}>{errorMessage}</span> : null}
    </div>
  )
}
