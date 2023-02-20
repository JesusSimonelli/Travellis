import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <ul className={styles.list}>                
                <li className={styles.item}><Link className={styles.link} to='#'>Contact us</Link></li>
            </ul>
        </div>
    )
}
