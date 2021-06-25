import React from 'react'
import { useBook, useForm } from '../hooks'
import { FormDataType } from '../types'
import FormPageComponent from '../page-components/FormPageComponent'

const Create = () => {
    const { books, createBook } = useBook()
    const form = useForm<FormDataType>({
        initialValues: {
            author: '',
            title: '',
            previewImage: undefined,
        },
        onSubmit: (values) => {
            createBook(values)
        },
    })
    console.log(books)
    return <FormPageComponent {...form} titlePage="Create" />
}

export default Create
