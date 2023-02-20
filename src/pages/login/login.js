import { useState } from "react"
import { UseLogin } from "../../hooks/UseLogin"
import styles from './login.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { error, login } = UseLogin()

    function handleSubmit(e) {
        e.preventDefault()
        login(email, password)
    }
    return (
        <section className={styles.login}>
            <div className={styles.texts}>
                <h1 className='heading-1'>Wellcome back to Travellis!</h1>
                <p className='paragraphy'>Make your login to talk with your second family</p>
            </div>

            <div className={styles.singup__form}>
                <h3 className='heading-2'>Dont forget your email or password</h3>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.group}>
                        <input type='email' className={styles.input} placeholder='Email address' id='email' required onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label htmlFor='email' className={styles.label}>Email Address</label>
                    </div>
                    <div className={styles.group}>
                        <input type='password' className={styles.input} placeholder='Your password' id='password' required onChange={(e) => setPassword(e.target.value)} value={password} />
                        <label htmlFor='password' className={styles.label}>Password</label>
                    </div>
                    <div className={styles.group}>
                        <button className='btn'>Login</button>
                        {error && <p>{error}</p>}
                    </div>
                </form>
            </div>
        </section>

    )
}
