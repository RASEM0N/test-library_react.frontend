import React from 'react'
import { useBook, useForm } from '../hooks'
import { FormDataType } from '../types'
import FormPageComponent from '../page-components/FormPageComponent'
import { useHistory } from 'react-router-dom'

const Create = () => {
    const { books, createBook } = useBook()
    const history = useHistory()
    const form = useForm<FormDataType>({
        initialValues: {
            author: '',
            title: '',
            previewImage: undefined,
        },
        onSubmit: async (values) => {
            await createBook(values)
            history.push('/')
        },
    })
    console.log(books)
    return <FormPageComponent {...form} titlePage="Create" />
}

export default Create
