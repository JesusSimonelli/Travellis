import Paris from '../../../src/img/paris.jpg'
import London from '../../../src/img/london.jpg'
import Verona from '../../../src/img/verona.jpg'

import airport from '../../img/svg/airplane.svg'
import earth from '../../img/svg/earth.svg'
import location from '../../img/svg/location2.svg'
import user from '../../img/svg/user.svg'
import styles from './places.module.css'

export default function Places() {
    return (
        <section className={styles.places}>
            <h1 className='heading__primary-main'>Beautiful Places</h1>
            <div className={styles.grid}>
                <div className={styles.place}>
                    <img src={Paris} alt='Paris' className={styles.img} />
                    <h3>Torre Eiffel - France</h3>
                    <div className={styles.name}>
                    <img src={location} alt='Location' className={styles.svg} />
                        <p>Paris</p>
                    </div>
                    <div className={styles.location}>
                        <img src={earth} alt='Location' className={styles.svg} />
                        <p>Europe</p>
                    </div>
                    <div className={styles.language}>
                    <img src={user} alt='Location' className={styles.svg} />
                        <p>French</p>
                    </div>
                    <div className={styles.airports}>
                    <img src={airport} alt='Location' className={styles.svg} />
                        <p>2 Airports</p>
                    </div>
                    <p className={styles.paragraphy}>One of the most beaultiful and romantics places in the world</p>
                </div>

                <div className={styles.place}>
                    <img src={London} alt='Paris' className={styles.img} />
                    <h3>Tower Bridge - England</h3>
                    <div className={styles.name}>
                    <img src={location} alt='Location' className={styles.svg} />
                        <p>London</p>
                    </div>
                    <div className={styles.location}>
                        <img src={earth} alt='Location' className={styles.svg} />
                        <p>United Kingdgom</p>
                    </div>
                    <div className={styles.language}>
                    <img src={user} alt='Location' className={styles.svg} />
                        <p>English</p>
                    </div>
                    <div className={styles.airports}>
                    <img src={airport} alt='Location' className={styles.svg} />
                        <p>3 Airports</p>
                    </div>
                    <p className={styles.paragraphy}>One of the most beaultiful and romantics places in the world</p>
                </div>
                <div className={styles.place}>
                    <img src={Verona} alt='Paris' className={styles.img} />
                    <h3>Citta Vechia - Italia</h3>
                    <div className={styles.name}>
                    <img src={location} alt='Location' className={styles.svg} />
                        <p>Verona</p>
                    </div>
                    <div className={styles.location}>
                        <img src={earth} alt='Location' className={styles.svg} />
                        <p>Europe</p>
                    </div>
                    <div className={styles.language}>
                    <img src={user} alt='Location' className={styles.svg} />
                        <p>Italian</p>
                    </div>
                    <div className={styles.airports}>
                    <img src={airport} alt='Location' className={styles.svg} />
                        <p>1 Airport</p>
                    </div>
                    <p className={styles.paragraphy}>One of the most beaultiful and romantics places in the world</p>
                </div>


            </div>
        </section>
    )
}
