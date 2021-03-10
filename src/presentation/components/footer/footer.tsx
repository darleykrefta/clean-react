import React, { memo } from 'react'

import Styles from './footer-styles.scss'

export const Footer: React.FC = memo(() => {
  return <footer className={Styles.footer}></footer>
})

Footer.displayName = 'Footer'
