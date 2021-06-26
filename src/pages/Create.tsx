import React, { useState } from 'react'
import { useBook, useForm } from '../hooks'
import { FormDataType } from '../types'
import FormPageComponent from '../page-components/FormPageComponent'
import { useHistory } from 'react-router-dom'
import encodeFileBase64 from '../utils/encodeFIleBase64'

const Create = () => {
    const { createBook } = useBook()
    const [file, setFile] = useState<string | undefined>()
    const history = useHistory()
    const form = useForm<FormDataType>({
        initialValues: {
            author: '',
            title: '',
        },
        onSubmit: async (values) => {
            values.previewImage = file
            await createBook(values)
            history.push('/')
        },
    })

    // зарефакторить
    const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            encodeFileBase64(files[0], setFile)
        }
    }

    return <FormPageComponent {...form} titlePage="Create" uploadFile={uploadFile} />
}

export default Create
