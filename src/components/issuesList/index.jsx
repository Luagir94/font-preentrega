import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import apiCalls from '../../api'
import DeleteModal from '../deleteModal'
const IssuesList = () => {
    const [data, setData] = useState([])
    const [itemToDelete, setItemToDelete] = useState({})
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleModal = () => setModal(!modal)
    useEffect(() => {

    }, [])


    return (
        <>
        {modal && <DeleteModal
         handleModal={handleModal}
         itemToDelete={itemToDelete}
         />}
        <div className={styles.issuesList}>
            <div className={styles.listContainer}>
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
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit} onClick={()=>navigate(`/issue-detail/22`)}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete} onClick={handleModal}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div>
                        <p>22</p>
                    </div>
                    <div>
                        <p>Issue 1</p>
                    </div>
                    <div>
                        <button className={styles.edit}>
                            <img src="/assets/edit.svg" alt="" />
                        </button>
                    </div>
                    <div>
                        <button className={styles.delete}>
                            <img src="/assets/delete.svg" alt="" />
                        </button>
                    </div>
                </div>

        
            </div>
            <div className={styles.buttons}>
                <button onClick={()=>navigate("/new-issue")}>New Issue</button>
            </div>
        </div>
        </>
        
    )
}

export default IssuesList