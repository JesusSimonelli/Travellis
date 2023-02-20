import { useState } from 'react'
import Select from 'react-select'
import styles from './createNewPost.module.css'

import { useAuthContext } from '../../hooks/UseAuthContext'
import UseFirestore from '../../hooks/UseFirestore'
import { useNavigate } from 'react-router-dom'
import { projectStorage, timestamp } from '../../firebase/config'


const categories = [
  { value: 'europe', label: 'Europe' },
  { value: 'asia', label: 'Asia' },
  { value: 'america', label: 'America' },
  { value: 'africa', label: 'Africa' },
]

export default function CreateNewPost() {
  const { addDocument, response } = UseFirestore('projects')
  const navigate = useNavigate()

  const [img, setImg] = useState(null)
  const [name, setName] = useState('')
  const [details, setDetails] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [imgError, setImgError] = useState(null)
  const [category, setCategory] = useState('')

  const { user } = useAuthContext()

  async function handleSubmit(e) {
    e.preventDefault()

    const uploadPath = '/images/' + img.name
    const imag =  await projectStorage.ref(uploadPath).put(img)
    const imgUrl = await imag.ref.getDownloadURL()

    const createBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid
    }

    const project ={
      name,
      details,
      category:category.value,
      dueDate:timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createBy,
      img: imgUrl
    }

    await addDocument(project)
}
  

  async function handleFileChange(e) {
    setImg(null)
    let selected = e.target.files[0]
    console.log(selected)

    if (!selected) {
      setImgError('Please select a image')
      return
    }
    if (!selected.type.includes('image')) {
      setImgError('file not suported')
      return
    }

    setImgError(null)
    setImg(selected)
    console.log('file upadate')

  

  }
  return (
    <div className={styles.create}>
      <div className={styles.texts}>
        <h1 className='heading-1'>Tell me about your trip</h1>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.group} ${styles.name}`}>
          <input
            className={styles.input}
            type='text'
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder='Name'
          />
        </div>
        <div className={`${styles.group} ${styles.details}`}>
          <textarea
            className={styles.input}
            type='text'
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
            placeholder='Trip Details:'
            rows={4}
          ></textarea>
        </div>
        <div className={`${styles.group} ${styles.dates}`}>
          <input
            className={styles.date}
            type='date'
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />

        </div>
        <div className={`${styles.group} ${styles.files}`}>
            <input
              className={styles.file}
              type='file'
              required
              onChange={handleFileChange}
            />
            {imgError && <div>{imgError}</div>}
       
        </div>
        <div className={`${styles.group} ${styles.category}`}>
            <Select
              className={styles.select}
              onChange={(option) => setCategory(option)}
              options={categories}
              required
              placeholder='Category'
            />
        </div>
        <div className={styles.button}>
        <button  >Create a Post</button>
        </div>
      </form>
    </div>
  )
}
