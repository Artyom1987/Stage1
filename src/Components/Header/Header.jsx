import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1000px-Apple_logo_black.svg.png"
                alt=""/>
        </header>
    )
};
export default Header