import React from 'react'
import styles from './fun-logo.module.scss'
import Logo from '../assets/logo.svg'

export const FunLogo = () => {
  console.log('>>>', styles)
  return (
    <div className={styles['funLogo']}>
      <Logo />
    </div>
  )
}
