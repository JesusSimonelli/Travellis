import { useParams } from 'react-router-dom'
import { UseDocument } from '../../hooks/useDocument'
import ProjectSummary from './projectSummary' 
import styles from './project.module.css'
import Sidebar from '../../components/layout/sidebar'

export default function Project() {
    const {id} = useParams()
    const {error, document} = UseDocument('projects', id)


    if (error){
        return <div>{error}</div>
    }
    if(!document){
        return <p>Loading...</p>
    }
  return (
    <div className={styles.project_details}>
        <Sidebar />
        <div className={styles.content}>
        <ProjectSummary project={document} />
        </div>
    </div>
  )
}
