import styles from './plus.module.css'
import {ReactComponent as Airplane } from '../../img/svg/airplane2.svg'
import {ReactComponent as Map } from '../../img/svg/map.svg'
import {ReactComponent as User } from '../../img/svg/user-add.svg'
import {ReactComponent as Hotel } from '../../img/svg/location-hotel.svg'
import {ReactComponent as Car } from '../../img/svg/travel-car.svg'
import {ReactComponent as Conversation } from '../../img/svg/conversation.svg'

export default function Plus() {
    return (
        <section className={styles.plus}>
            <h1 className='heading-1'>What you will win</h1>
            <p className='paragraphy'>Lorem ipsum dolor sit amet. Eos asperiores mollitia sit quia facilis est excepturi magni est voluptatibus reprehenderit aut doloremque similique sit facere quae 33 ratione rerum. Quo culpa repellat et tempore dolores sed iusto provident.</p>
            <div className={styles.grid}>
                <div className={styles.icon}>
                    <Airplane className={styles.svg} />
                    <p>Tickets to travel</p>
                </div>
                <div className={styles.icon}>
                    <Map className={styles.svg} />
                    <p>Tour Guide</p>
                </div>
                <div className={styles.icon}>
                    <User className={styles.svg} />
                    <p>New friends to travel</p>
                </div>
                <div className={styles.icon}>
                    <Hotel className={styles.svg} />
                    <p>Hotel reservations</p>
                </div>
                <div className={styles.icon}>
                    <Conversation className={styles.svg} />
                    <p>Learn with others</p>
                </div>
                <div className={styles.icon}>
                    <Car className={styles.svg} />
                    <p>Gift Ride</p>
                </div>
            </div>
        </section>
    )
}
