import React from 'react'
import { useBook } from '../hooks'
import Book from '../components/Book/Book'

const Home = () => {
    const { books, deleteBook } = useBook()

    return (
        <div className="container">
            <div className="books">
                {books &&
                    books.map((b) => {
                        return <Book key={b._id} {...b} deleteBook={deleteBook} />
                    })}
            </div>
        </div>
    )
}

export default Home
