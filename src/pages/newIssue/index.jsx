import React from 'react'
import styles from './index.module.scss'

import CreateIssue from '../../components/createIssue';
const NewIssue = () => {
  return (
    <div className={styles.pageWrapper}>
      <CreateIssue/>
    </div>
  )
}

export default NewIssue