import React from 'react'

import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

export const Spinner: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={[Styles.spinner, className].join(' ')}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
