import React, { useState } from 'react'
import styles from './index.module.scss'
import { ColorRing } from 'react-loader-spinner'
const Modal = ({ handleModal, operation, data, action }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const handleLoader = async () => {
        setLoading(true)
        try {
            await action()
            setLoading(false)
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }


    if (operation === 'error') {
        return (<div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <p className={styles.error}>An error occurred, please try again later.</p>                <div className={styles.buttons}>
                    <div>
                        <button onClick={handleModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>)
    }
    if (operation === 'success') {
        return (<div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <p className={styles.success}>
                    Successful task.!</p>
                <div className={styles.buttons}>
                    <div>
                        <button onClick={handleModal}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>)
    }


    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <p>Do you want to delete #{data?.id} {data?.title}?</p>
                {!error && <p className={styles.error}>An error occurred, please try again later.</p>}
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
                        : <>
                            <div>
                                <button onClick={handleModal}>
                                    Close
                                </button>
                            </div>
                            <div>
                                <button onClick={handleLoader}>Delete</button>
                            </div>
                        </>


                    }

                </div>
            </div>
        </div>
    )
}

export default Modal