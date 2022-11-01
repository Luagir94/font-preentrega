import React from 'react'
import styles from './index.module.scss'
import LoginForm from '../../components/loginForm'
const Login = () => {
  return (
    <div className={styles.pageWrapper}>
      <LoginForm/>
    </div>
  )
}

export default Login