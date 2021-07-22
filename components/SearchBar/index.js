import React from 'react'
import styles from './search.module.css'

const SearchBar = () => {
    return (
        <div className={styles.coin_search}>
            <input className={styles.coin_input} />
        </div>
    )
}

export default SearchBar
