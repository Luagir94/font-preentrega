import React from 'react'
import styles from './index.module.scss'
import { useParams } from 'react-router-dom';
import IssueDescription from '../../components/issueDescription';
const IssueDetail = () => {
  let { id } = useParams();

  return (
    <div className={styles.pageWrapper}>
      <IssueDescription />
    </div>
  )
}

export default IssueDetail