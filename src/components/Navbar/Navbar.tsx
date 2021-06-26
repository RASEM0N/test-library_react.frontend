import React, { useRef, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import cn from 'classnames'
import Search from './assets/Search'

const Navbar = () => {
    const location = useLocation()
    const inputRef = useRef<HTMLInputElement>(null)
    const history = useHistory()

    const search = () => {
        if (inputRef.current !== null) {
            history.push(`/?search=${inputRef.current.value}`)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            search()
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.link}>
                        <Link
                            tabIndex={1}
                            to="/"
                            className={cn({
                                [styles.active]: location.pathname === '/',
                            })}>
                            Home
                        </Link>
                    </div>
                    <div className={styles.link}>
                        <Link
                            tabIndex={2}
                            to="/create"
                            className={cn({
                                [styles.active]: location.pathname === '/create',
                            })}>
                            Create
                        </Link>
                    </div>
                    {/* переделать */}
                    <div className={styles.searchWrapper}>
                        <Search onClick={() => search()} className={styles.search} />
                        <input
                            ref={inputRef}
                            type="text"
                            placeholder="Search"
                            tabIndex={3}
                            onKeyDown={onKeyDown}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
