import React from 'react'
import CreateNewPost from '../../components/Create/createNewPost'
import Sidebar from '../../components/layout/sidebar'
import styles from './create.module.css'

export default function Create() {
  return (
    <div className={styles.create}>
        <Sidebar />
        <CreateNewPost />
    </div>
  )
}
