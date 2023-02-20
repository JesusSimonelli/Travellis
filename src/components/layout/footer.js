import { Link } from 'react-router-dom'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <ul className={styles.nav}>
            <li className={styles.item}><Link to='#' className={styles.link}>Contact us</Link></li>
            <li className={styles.item}><Link to='#' className={styles.link}>Sing Up</Link></li>
            <li className={styles.item}><Link to='#' className={styles.link}>Helpers</Link></li>
        </ul>
        <p className={styles.copyright}>&copy; Copyright 2023 by Vinicius Simoneli</p>
    </footer>
  )
}
