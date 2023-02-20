import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/UseAuthContext'
import { UseLogout } from '../../hooks/UseLogout'
import Avatar from '../Avatar/avatar'

import styles from './sidebar.module.css'

export default function Sidebar() {

  const {logout} = UseLogout()
  const {user} = useAuthContext()

  return (
    <div className={styles.sidebar}>
      <div className={styles.users}>
        <Avatar src={user.photoURL}/>
        <h3>{user.displayName}</h3>
        <p>{user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>  
       <ul className={styles.nav}>
        <li className={styles.item}><Link to='/dashboard' className={styles.link}>Dashboard</Link></li>
       </ul>
    </div>
  )
}
