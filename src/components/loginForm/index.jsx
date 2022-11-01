import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
const LoginForm = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const handleForm = (e) => setForm({...form, [e.target.name] : e.target.value})
    const sendForm = async (e) =>{
        e.preventDefault()

        const sendData = await apiCalls.login(form)
        console.log(sendData);
    }    
    return (
        <div className={styles.loginForm}>
            <form className={styles.form} onSubmit={sendForm}>
            <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="" value={form.email} onChange={handleForm} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name='password' value={form.password} onChange={handleForm}/>
                </div>
                <div>
                    <button type='button' onClick={() => navigate("/register")}>Crear Cuenta</button>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm