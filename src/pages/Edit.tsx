import React, { useState } from 'react'
import { useBook, useForm } from '../hooks'
import { Book, FormDataType } from '../types'
import FormPageComponent from '../page-components/FormPageComponent'
import { useHistory, useParams } from 'react-router-dom'
import NotFound from './NotFound'

const EditContainer = () => {
    const { updateBook, findBookById } = useBook()
    const params = useParams<{ bookId: string }>()
    const [selectedBook] = useState<Book | null>(() => {
        return findBookById(params.bookId)
    })

    return selectedBook ? <Edit book={selectedBook} editMethod={updateBook} /> : <NotFound />
}

interface EditPropsType {
    book: Book
    editMethod: (formData: FormDataType, bookId: string) => void
}

const Edit = ({ book, editMethod }: EditPropsType): JSX.Element => {
    const history = useHistory()
    const form = useForm<FormDataType>({
        initialValues: {
            author: book.author,
            title: book.title,
            previewImage: book.previewImage,
        },
        onSubmit: async (values) => {
            await editMethod(values, book._id)
            history.push('/')
        },
    })

    return <FormPageComponent {...form} titlePage="Edit" buttonText="Edit" />
}

export default EditContainer
