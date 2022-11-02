import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateTime } from 'luxon'
import styles from './index.module.scss'
import apiCalls from '../../api'
import { ColorRing } from 'react-loader-spinner'
import Modal from '../modal'
const RegisterForm = () => {
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const [task, setTask] = useState('error')
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        created: undefined,
        id: ''
    })
    const handleModal = () => setModal(!modal)

    const handleForm = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    
    const sendForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        form.created = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
        form.id = Math.floor(Math.random() * 1000000)
        try {
            await apiCalls.register(form)
            setLoading(false)
            setTask('success')
            handleModal()
        } catch (error) {
            setLoading(false)
            setTask('error')
            handleModal()
        }

    }

    const navigate = useNavigate()
    return (
        <>
         {modal && <Modal
                handleModal={handleModal}
                operation={task}
            />}
        <div className={styles.registerForm}>
            <form className={styles.form} onSubmit={sendForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="" value={form.name} required onChange={handleForm} />
                </div>
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
                            <button type='button' onClick={() => navigate("/")}>Go To Login</button>
                            <button type='submit'>Register</button>
                        </>
                    }
                </div>
            </form>
        </div>

        </>
    )
}

export default RegisterForm