import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import cn from 'classnames'

const Navbar = () => {
    const location = useLocation()
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.link}>
                        <Link
                            to="/"
                            className={cn({
                                [styles.active]: location.pathname === '/',
                            })}>
                            Home
                        </Link>
                    </div>
                    <div className={styles.link}>
                        <Link
                            to="/create"
                            className={cn({
                                [styles.active]: location.pathname === '/create',
                            })}>
                            Create
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
