import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
import { useAuth } from '../../context/authContext'
import Modal from '../modal'
import { ColorRing } from 'react-loader-spinner'
const CreateIssue = () => {
    const { token } = useAuth()
    const [modal, setModal] = useState(false)
    const [data, setData] = useState({
        name: '',
        description: '',
        priority_id: 1

    })
    const [priorities, setPriorities] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleModal = () => setModal(!modal)
    const handleData = (e) => setData({ ...data, [e.target.name]: e.target.value })
    const updateData = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await apiCalls.post(token, `issues`, data)
            navigate('/')
        } catch (error) {
            setLoading(false)
            handleModal()
        }

    }
    useEffect(() => {
        const getData = async () => {
            try {
                const reqPrio = await apiCalls.get(token, 'priorities')
                setPriorities(reqPrio.data)
            } catch (error) {

            }

        }
        getData()
    },)

    return (
        <>
            {modal && <Modal
                handleModal={handleModal}
                operation={'error'}
            />}
            <form onSubmit={updateData} className={styles.issueDesc}>
                <div className={styles.listContainer}>
                    <div>
                        <div>
                            <label htmlFor="">Priorities</label>
                            <input type="text" name='name' onChange={handleData} value={data.name} required />
                        </div>
                        <div>
                            <label htmlFor="">Priorities</label>
                            <select name="priority_id" id="" value={data.priority_id} onChange={handleData} required>
                                {priorities && priorities?.map(x => <option key={x.id} value={x.id}>{x.type}</option>)}

                            </select>
                        </div>
                    </div>
                    <div>

                        <textarea value={data?.description} name='description' onChange={handleData} required>

                        </textarea>

                    </div>
                </div>
                <div className={styles.buttons}>
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
                            <div>
                                <button type='button' onClick={() => navigate('/')}>Back</button>
                            </div>
                            <div>
                                <button type='submit' >Save Issue</button>
                            </div>

                        </>
                    }



                </div>
            </form>
        </>

    )
}

export default CreateIssue