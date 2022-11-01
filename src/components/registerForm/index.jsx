import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { DateTime } from 'luxon'
import styles from './index.module.scss'
import apiCalls from '../../api'
const RegisterForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        created: undefined
    })
    const handleForm = (e) => setForm({...form, [e.target.name] : e.target.value})
    const sendForm = async (e) =>{
        e.preventDefault()
        form.created = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
        // console.log(form);
        const sendData = await apiCalls.register(form)
        console.log(sendData);
    }    

    
    const navigate = useNavigate()
    return (
        <div className={styles.registerForm}>
            <form className={styles.form} onSubmit={sendForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id=""  value={form.name} onChange={handleForm}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="" value={form.email} onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name='password' value={form.password} onChange={handleForm}/>
                </div>
                <div>
                    <button type='button' onClick={() => navigate("/")}>Login</button>
                    <button type='submit'>Crear Cuenta</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm