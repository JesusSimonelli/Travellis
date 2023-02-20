import { Link } from 'react-router-dom'
import styles from './content.module.css'

export default function Content({projects}) { 


  return (
    <section className={styles.projects}>
      <ul className={styles.list}>
      {projects?.length && projects.map((project) => (        
        <Link to={`/projects/${project.id}`} key={project.id} className={styles.project}>
          <div className={styles.content}>
            <div className={styles.title}>
              <div key={project.createBy.id} className={styles.created}>
                <div className={styles.createImgBox}>
                  <img src={project.createBy.photoURL} className={styles.thumb} alt='imagePhoto'ß/>
                </div>
              </div>
              <h1 className='heading-1'>{project.name}</h1>
            </div>
            <div className={styles.img__box}>
              <img src={project.img} alt='trip day' />
            </div>
            <div className={styles.details}>
              <p>{project.details}</p>
            </div>
          </div>
        
        
        </Link>
      ))}
      </ul>
    </section>
  )
}
