import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
const IssueDescription = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

    }, [])


    return (
        <div className={styles.issueDesc}>
           <div className={styles.listContainer}>
                <div>
                    <div>
                        <p><span>#22</span>Title</p>
                    </div>
                    <div>
                        <label htmlFor="">Priorities</label>
                        <select name="" id="">
                            <option value="">Leve</option>
                            <option value="">Moderado</option>
                            <option value="">Grave</option>
                        </select>
                    </div>
                </div>
                <div>
                  
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate laborum sit ex atque, quam perspiciatis nemo, autem debitis delectus quibusdam accusamus voluptas facilis ullam mollitia quae, est quaerat vel eius!
                        </p>
                    
                </div>
           </div>
            <div className={styles.buttons}>
                <div>
                <button onClick={()=>navigate('/')}>Back</button>
                </div>
                <div>
                <button>Save Changes</button> 
                </div>
                
              
            </div>
        </div>
    )
}

export default IssueDescription