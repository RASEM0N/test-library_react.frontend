import { Book } from '../../types'

export const stringToBooks = (value: string): Book[] => {
    if (typeof value === 'undefined') {
        return []
    }
    try {
        const books = JSON.parse(value)
        if (books instanceof Array) {
            // глубокая проверка?
            return books as Book[]
        }
        return []
    } catch (error) {
        console.log(error.message)
        return []
    }
}

export const booksToString = (books: Book[]): string => {
    return JSON.stringify(books)
}
