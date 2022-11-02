import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
import Modal from '../modal'
import { ColorRing } from 'react-loader-spinner'
import { useAuth } from '../../context/authContext'
const IssuesList = () => {
    const { token } = useAuth()
    const [data, setData] = useState([])
    const [itemToDelete, setItemToDelete] = useState({})
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleModal = () => setModal(!modal)
    const selectItem = (x) => {
        setItemToDelete(x)
        setModal(!modal)
    }
    const deleteItem = async () => {
        try {
            await apiCalls.delete(token, `issues/${itemToDelete.id}`)
            const refreshData = data.filter(x => itemToDelete.id !== x.id)
            setData(refreshData)
            handleModal()
        } catch (error) {

        }
    }
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const req = await apiCalls.get(token, `issues`)
                setData(req.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }

        }
        getData()
    })


    return (
        <>
            {modal && <Modal
                handleModal={handleModal}
                action={deleteItem}
                data={itemToDelete}
                operation={'delete'}
            />}
            <div className={styles.issuesList}>
                <div className={styles.listContainer}>
                    {data.length
                        ?
                        <>
                            <div className={styles.card}>
                                <div>
                                    <p>ID</p>
                                </div>
                                <div>
                                    <p>Title</p>
                                </div>
                                <div>
                                    <p>View</p>
                                    <p>/Edit</p>
                                </div>
                                <div>

                                    <p>Delete</p>

                                </div>
                            </div>
                            {data?.map(x => <div key={x.id} className={styles.card}>
                                <div>
                                    <p>{x.id}</p>
                                </div>
                                <div>
                                    <p>{x.name}</p>
                                </div>
                                <div>
                                    <button className={styles.edit} onClick={() => navigate(`/issue-detail/${x.id}`)}>
                                        <img src="/assets/edit.svg" alt="" />
                                    </button>
                                </div>
                                <div>
                                    <button className={styles.delete} onClick={() => selectItem(x)}>
                                        <img src="/assets/delete.svg" alt="" />
                                    </button>
                                </div>
                            </div>)}
                        </>
                        :
                        <div className={styles.emptyIssues}>{loading ?
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperClass="blocks-wrapper"
                                colors={['#171717', '#da0037', '#ededed', '#171717', '#da0037', '#ededed']}
                            /> : 'No issues at the momment'}</div>
                    }



                </div>
                <div className={styles.buttons}>
                    <button onClick={() => navigate("/new-issue")}>New Issue</button>
                </div>
            </div>
        </>

    )
}

export default IssuesList