import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
import { useAuth } from '../../context/authContext'
import { useParams } from 'react-router-dom'
import Modal from '../modal'
import { ColorRing } from 'react-loader-spinner'

const IssueDescription = () => {
    const { token } = useAuth()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [priorities, setPriorities] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    const handleModal = () => setModal(!modal)
    const handleData = (e) => setData({ ...data, [e.target.name]: e.target.value })
    const updateData = async () => {
        setLoading(true)
        try {
            await apiCalls.patch(token, `issues/${id}`, data)
            navigate('/')
        
        } catch (error) {
            setLoading(false)
            handleModal()
        }
    }
    useEffect(() => {
        const getData = async () => {
            try {
                const req = await apiCalls.get(token, `issues/${id}`)
                const reqPrio = await apiCalls.get(token, 'priorities')
                setData(req.data)
                setPriorities(reqPrio.data)
            } catch (error) {

            }

        }
        getData()
    })

    return (
        <>

            {modal && <Modal
                handleModal={handleModal}
                operation={'error'}
            />}
            <div className={styles.issueDesc}>
                <div className={styles.listContainer}>
                    {data && <div>
                        <div>
                            <p><span>#{data?.id}</span>{data?.name}</p>
                        </div>
                        <div>
                            <label htmlFor="">Priorities</label>
                            <select name="priority_id" id="" value={data.priority_id} onChange={handleData}>
                                {priorities && priorities?.map(x => <option key={x.id} value={x.id}>{x.type}</option>)}

                            </select>
                        </div>
                    </div>}
                    <div>

                        <p>
                            {data  ? data?.description : "Issue not found."}
                        </p>

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
                                <button onClick={() => navigate('/')}>Back</button>
                            </div>
                            <div>
                                <button onClick={updateData}>Save Changes</button>
                            </div>
                        </>
                    }



                </div>
            </div>
        </>

    )
}

export default IssueDescription