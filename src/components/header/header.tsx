import React from 'react'
import Button from '../button/button'
import styles from './header.module.scss'

const Header: React.FC = () => {
  return (
    <header id={styles.head}>
    <h1>Welcome To The Beach</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi officiis ipsum officia numquam expedita ullam.</p>
    <Button/>
  </header>
  )
}

export default Header