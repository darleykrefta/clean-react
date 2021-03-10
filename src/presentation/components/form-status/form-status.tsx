import React from 'react'

import { Spinner } from '@/presentation/components'

import Styles from './form-status-styles.scss'

export const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />

      <span className={Styles.error}>Erro</span>
    </div>
  )
}
