import React from 'react'
import styles from './index.module.scss'
import { useParams } from 'react-router-dom';
import CreateIssue from '../../components/createIssue';
const NewIssue = () => {
  let { id } = useParams();

  return (
    <div className={styles.pageWrapper}>
      <CreateIssue/>
    </div>
  )
}

export default NewIssue