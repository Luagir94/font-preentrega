import React from 'react'
import styles from './index.module.scss'
import IssuesList from '../../components/issuesList'
const Issues = () => {
  return (
    <div className={styles.pageWrapper}>
        <IssuesList/>
    </div>
  )
}

export default Issues