import React from 'react'
import styles from './index.module.scss'

import IssueDescription from '../../components/issueDescription';
const IssueDetail = () => {


  return (
    <div className={styles.pageWrapper}>
      <IssueDescription />
    </div>
  )
}

export default IssueDetail