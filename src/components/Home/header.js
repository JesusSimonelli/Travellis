import styles from './header.module.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo__box}>
        <h1 className={styles.logo}><Link to='/'>Travellis</Link></h1>
      </div>
      <div className={styles.nav}>
        <p className={`btn ${styles.singup}`}><Link to='/signup'>Sing Up</Link></p>
        <p className={`btn ${styles.singup}`}><Link to='/login'>Login</Link></p>
      </div>
      <div className={styles.text__box}>
        <h1 className='heading__primary'>
          <span className={`${styles.animationMain} heading__primary-main`}>Travel</span>
          <span className={`${styles.animationSub} heading__primary-sub`}>is a really happnies</span>
        </h1>
        <p className='btn'><Link to='#'>Viage</Link></p>
      </div>
    </header>
  )
}
