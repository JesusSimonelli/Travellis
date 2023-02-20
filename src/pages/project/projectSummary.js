import { useState } from 'react'
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/UseAuthContext'
import UseFirestore  from '../../hooks/UseFirestore'
import styles from './projectSummary.module.css'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { ReactComponent as Heart } from '../../img/svg/heart.svg'
import { ReactComponent as Save } from '../../img/svg/checkbox-checked.svg'

export default function ProjectSummary({ project }) {
  const [newComment, setNewComment] = useState()

  const { user } = useAuthContext()
  const { updateDocuments, response } = UseFirestore('projects')

  async function handleSubmit(e) {
    e.preventDefault()

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createAt: timestamp.fromDate(new Date()),
      id: Math.random()
    }

    await updateDocuments(project.id, {
      comments: [...project.comments, commentToAdd]
    })
    if (!response.error) {
      setNewComment('')
    }

  }

  return (
    <div className={styles.project}>
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.nameCreator}>
            <div key={project.createBy.id} className={styles.photo_box}>
              <img src={project.createBy.photoURL} className={styles.photo} alt='imagem' />
            </div>
            <div className={styles.name}>
              <p>{project.createBy.displayName}</p>
            </div>
          </div>
          <h2>{project.name}</h2>
        </div>

        <div className={styles.img_box}>
          <img src={project.img} alt={project.name} className={styles.img} />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>
            <p>{project.createBy.displayName}</p>
          </div>
          <p className={styles.pDetails}>{project.details}</p>
        </div>
      </div>


      <div className={styles.comments}>
        <ul className={styles.list}>
          {project.comments.map(comment => (
            <li key={comment.id} className={styles.item}>
              <button className={styles.heart}>
                <Heart className={styles.heart_svg} />
              </button>
              <div className={styles.save}>
                <Save className={styles.save_svg} />
              </div>
              <div className={styles.infoComment}>
                <div className={styles.author}>
                  <div className={styles.author_box}>
                    <img src={comment.photoURL} alt='comment user' />
                  </div>
                  <div className={styles.nameDate}>
                    <p className={styles.nameAuthor}>{comment.displayName}</p>
                    <p className={styles.date}>{formatDistanceToNow(comment.createAt.toDate(), { addSuffix: true })}</p>
                  </div>
                </div>
              </div>
              <div className={styles.paragraphy}>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
        </ul>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <input
              type='text'
              required
              onChange={(e) => setNewComment(e.target.value)}
              value={newComment}
              placeholder='Write a comment'
            />
          </label>
          <button>Post</button>
          <div className={styles.info}>
            <p>{project.dueDate.toDate().toDateString()}</p>
          </div>
        </form>
      </div>
    </div>
  )
}
