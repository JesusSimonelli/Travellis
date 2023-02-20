import styles from './dashboard.module.css'
import Sidebar from '../../components/layout/sidebar'
import { UseCollection } from '../../hooks/UseCollection'
import Content from '../../components/Dashboard/content'
import CreateNewPost from '../../components/Create/createNewPost'
import Filter from '../../components/Filter/filter'
import { useState } from 'react'


export default function Dashboard() {
  const [currentFilter, setCurrentFilter] = useState('all')
  const { documents } = UseCollection('projects')

  function changeFilter(newFilter) {
    setCurrentFilter(newFilter)
  }

  const projects = documents ? documents.filter(document => {
    switch (currentFilter) {
      case 'all':
        return true
      case 'europe':
      case 'asia':
      case 'america':
      case 'africa':
        console.log(document.category, currentFilter)
        return document.category === currentFilter
      default:
        return true
    }
  }) : null
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.content}>
        <div className={styles.create}>
          <CreateNewPost />
        </div>
        {document && <Filter currentFilter={currentFilter} changeFilter={changeFilter} />}
        <div className={styles.items}>
          <Content projects={projects} />
        </div>
      </div>
    </div>
  )
}
