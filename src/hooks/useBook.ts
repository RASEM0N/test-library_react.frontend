import useLocalStorage from './useLocalStorage'
import { useCallback, useMemo } from 'react'
import { Book, FormDataBook } from '../types'
import { booksToString, stringToBooks } from '../utils/dataNormalization'
import { generationID } from '../utils/generation'

const useBook = () => {
    const { item, setItem, error } = useLocalStorage('books', [])

    const books = useMemo<Book[]>(() => {
        return stringToBooks(item)
    }, [item])

    const change = (books: Book[]): void => {
        const value: string = booksToString(books)
        setItem(value)
    }

    // ---- ----- CREATE ----- ----
    const createBook = useCallback((formData: FormDataBook): void => {
        const createBook: Book = {
            ...formData,
            _id: generationID(),
        }
        change([...books, createBook])
    }, [])

    // ---- ----- UPDATE ----- ----
    const updateBook = useCallback((formData: FormDataBook, bookId: string): void => {
        const updatedBooks = books.map((b) => {
            if (b._id === bookId) {
                return {
                    ...b,
                    ...formData,
                }
            }
            return b
        })
        change(updatedBooks)
    }, [])

    // ---- ----- DELETE ----- ----
    const deleteBook = useCallback((bookId: string): void => {
        const updatedBooks = books.filter((b) => b._id !== bookId)
        change(updatedBooks)
    }, [])

    // ---- ----- FIND BOOK BY ID ----- ----
    const findBookById = (bookId: string): Book | null => {
        return books.find((b) => b._id === bookId) || null
    }

    return {
        error,
        books,
        createBook,
        updateBook,
        deleteBook,
        findBookById,
    }
}

export default useBook
