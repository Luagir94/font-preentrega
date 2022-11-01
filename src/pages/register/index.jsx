import React from 'react'
import styles from './index.module.scss'
import RegisterForm from '../../components/registerForm'
const Register = () => {
  return (
    <div className={styles.pageWrapper}>
      <RegisterForm/>
    </div>
  )
}

export default Register