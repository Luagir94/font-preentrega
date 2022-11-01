import React from 'react'
import styles from './index.module.scss'
const DeleteModal = ({handleModal}) => {
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalContainer}>
                <p>Do you want to delete?</p>
                <div className={styles.buttons}>
                    <div><button onClick={handleModal}>
                        Close
                    </button>
                    </div>
                    <div>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal