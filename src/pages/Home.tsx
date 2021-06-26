import React, { useMemo } from 'react'
import { Book as BookType } from '../types/index'
import { useBook } from '../hooks'
import Book from '../components/Book/Book'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const Home = () => {
    const { books, deleteBook } = useBook()
    const location = useLocation()

    const filteredBooks = useMemo<BookType[]>(() => {
        const parse = queryString.parse(location.search)
        return books.filter((b) => {
            if ('search' in parse) {
                const text = parse['search'] as string
                return b.author.includes(text) || b.title.includes(text)
            }

            if ('search_author' in parse) {
                const text = parse['search_author'] as string
                return b.author.includes(text)
            }

            if ('search_title' in parse) {
                const text = parse['search_title'] as string
                return b.title.includes(text)
            }

            return true
        })
    }, [location.search, books])

    return (
        <div className="container">
            <div className="books">
                {books &&
                    filteredBooks.map((b) => {
                        return <Book key={b._id} {...b} deleteBook={deleteBook} />
                    })}
            </div>
        </div>
    )
}

export default Home
