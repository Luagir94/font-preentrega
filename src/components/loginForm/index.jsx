import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
import { useAuth } from '../../context/authContext'
import { ColorRing } from 'react-loader-spinner'
import Modal from '../modal'
const LoginForm = () => {
    const { setLogged, setToken } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleForm = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    
    const handleModal = () => setModal(!modal)

    const sendForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const sendData = await apiCalls.login(form)
            setToken(sendData.data.token)
            setLogged(true)

        } catch (error) {
            setLoading(false)
            handleModal()
        }


    }
    return (
        <>
           {modal && <Modal
                handleModal={handleModal}
                operation={'error'}
            />}
        <div className={styles.loginForm}>
            <form className={styles.form} onSubmit={sendForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="" value={form.email} required onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={form.password} required onChange={handleForm} />
                </div>
                <div>
                    {loading ?
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#171717', '#da0037', '#ededed', '#171717', '#da0037', '#ededed']}
                        />
                        :
                        <>
                            <button type='button' onClick={() => navigate("/register")}>Create Account</button>
                            <button type='submit'>Login</button>
                        </>
                    }

                </div>
            </form>
        </div>
        </>
        
    )
}

export default LoginForm