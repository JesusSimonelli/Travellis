import { useState } from 'react'
import { UseSignup } from '../../hooks/UseSignup'
import {UseLogout} from '../../hooks/UseLogout'
import styles from './singup.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [thumbnailError, setThumbnailError] = useState(null)

  const {error, signup} = UseSignup()
  const {logout} = UseLogout()

  function handleSubmit(e) {
    e.preventDefault()
    signup(email, password, displayName, thumbnail)
  }

  function handleFileChange(e) {
    setThumbnail(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setThumbnailError('Please Select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return
    }

    setThumbnailError(null)
    setThumbnail(selected)
    console.log('thumbail update')
  }

  return (
    <section className={styles.singup}>
      <div className={styles.texts}>
        <h1 className='heading-1 text1'>Be a Travellis!</h1>
        <p className='paragraphy paragraphy1'>Best experience of travel, users helping each other.</p>
      </div>

      <div className={styles.singup__form}>
        <h3 className='heading-2'>Join us and win a lot of awards</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <input 
            type='file'
            required
            className={styles.file}
            onChange={handleFileChange}
            />         
          {thumbnailError && <div>{thumbnailError}</div>}
          </div>
          <div className={styles.group}>
            <input type='email' className={styles.input} placeholder='Email address' id='email' required onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor='email' className={styles.label}>Email Address</label>
          </div>
          <div className={styles.group}>
            <input type='password' className={styles.input} placeholder='Your password' id='password' required onChange={(e) => setPassword(e.target.value)} value={password} />
            <label htmlFor='password' className={styles.label}>Password</label>
          </div>
          <div className={styles.group}>
            <input type='name' className={styles.input} placeholder='Display Name' id='displayName' required onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
            <label htmlFor='displayName' className={styles.label}>Display Name </label>
          </div>
          <div className={styles.group}>
            <button className='btn'>Sign Up</button>
            {error && <p>{error}</p>}
          </div>
        </form>
      </div>
    </section>

  )
}
