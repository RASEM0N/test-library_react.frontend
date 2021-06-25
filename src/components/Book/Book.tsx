import React from 'react'
import { Link } from 'react-router-dom'
import { Book as BookType } from '../../types'
import styles from './Book.module.css'
import Logo from './assets/index'
import cn from 'classnames'

interface BookComponentType extends BookType {
    deleteBook: (bookId: string) => void
}

const Book = ({ _id, previewImage, title, author, deleteBook }: BookComponentType): JSX.Element => {
    const defaultImage =
        'https://phonoteka.org/uploads/posts/2021-04/1618912699_7-phonoteka_org-p-krasivii-fon-dlya-oblozhki-knigi-10.jpg'

    const handleDelete = () => {
        deleteBook(_id)
    }

    return (
        <div className={styles.book}>
            <div className={styles.image}>
                <img src={previewImage || defaultImage} alt="Картинка" />
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <span>Title</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to={`/?search_title=${title}`}>{title}</Link>
                </div>
                <div className={styles.text}>
                    <span>Author</span> &nbsp;&nbsp;
                    <Link to={`/?search_author=${author}`}>{author}</Link>
                </div>
            </div>
            <Link to={`/edit/${_id}`}>
                <Logo type="settings" className={cn(styles.logo, styles.settingsLogo)} />
            </Link>
            <Logo
                onClick={handleDelete}
                type="clear"
                className={cn(styles.logo, styles.clearLogo)}
            />
        </div>
    )
}

export default Book
