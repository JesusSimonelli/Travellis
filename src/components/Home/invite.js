import styles from './invite.module.css'
import Traveller from '../../img/traveller.jpg'
import { Link } from 'react-router-dom'

export default function Invite() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={`heading-1 ${styles.heading_content} `}>Join us and share all your trips and experience with us</h1>
                <p className={`paragraphy ${styles.paragraphy_content}`}>Lorem ipsum dolor sit amet. Ut omnis officiis ut culpa iusto est ullam quam ad beatae quae a minus voluptatem. Aut odit omnis ut necessitatibus exercitationem ut magnam incidunt eos.</p>
                <div className={styles.traveller}>
                    <img src={Traveller} alt='traveller' className={styles.img}></img>
                    <div className={styles.info}>
                        <p className={styles.name}>Anderson Reither Fullmer</p>
                        <p className={styles.role}>Expert in Asia</p>
                    </div>
                </div>
                <div className={styles.join}>
                    <h1>Join us its all free</h1>
                    <p className='btn size'><Link to='/signup'>Join Now</Link></p>
                </div>
            </div>
        </section>
    )
}
