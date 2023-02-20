import styles from './avatar.module.css'

export default function Avatar({src}) {
  return (
    <div className={styles.avatar}>
       <img src={src} alt='user avatar'/>
    </div>
  )
}
