import styles from './filter.module.css'

const filterList  = ['all', 'europe', 'asia', 'america', 'africa']

export default function Filter({currentFilter, changeFilter}) {

    function handleClick(newFilter){
        changeFilter(newFilter)
    }
  return (
    <div className={styles.project_filter}>
        <nav className={styles.nav}>
            {filterList.map((f) => (
                <button 
                key={f}
                onClick={() => handleClick(f)}
                className={currentFilter === f ? `${styles.button} ${styles.active}` : `${styles.button}`}
                >{f}</button>
            ))}
        </nav>
    </div>
  )
}
