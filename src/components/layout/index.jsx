import React from 'react'
import { useAuth } from '../../context/authContext'
import styles from './index.module.scss'

const Layout = ({children}) => {
    const {setLogged, setToken} = useAuth()
    const logout = () =>{
        setToken('')
        setLogged(false)
    }
  return (
    <div className={styles.layout}>
        <button className={styles.logout} onClick={logout}>Logout</button>
        {children}
    </div>
  )
}

export default Layout