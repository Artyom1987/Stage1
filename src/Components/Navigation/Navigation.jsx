import React from 'react'
import styles from './Navigation.module.css'
import NavLink from "react-router-dom/NavLink";


const Nav = () => {
    return (
        <nav className={styles.nav} >

            <div className={styles.navpad}>
                <NavLink to='/Profile' className={styles.item} activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div  >
                <NavLink className={styles.item} to='/Dialogs'   activeClassName={styles.active} >Messages</NavLink>
            </div>
            <div  >
                <NavLink to='/News' className={styles.item} activeClassName={styles.active}>News</NavLink>
            </div>
            <div >
                <NavLink to='/Music' className={styles.item} activeClassName={styles.active}>Music</NavLink>
            </div>
            <div >
                <NavLink to='/Settings' className={styles.item} activeClassName={styles.active}>Settings</NavLink>
            </div>


        </nav>
    )
};
export default Nav