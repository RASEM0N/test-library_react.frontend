import React from 'react'
import { useForm } from '../hooks'
import { FormDataType } from '../types'
import FormPageComponent from '../page-components/FormPageComponent'

const Edit = () => {
    const form = useForm<FormDataType>({
        initialValues: {
            author: '',
            title: '',
            previewImage: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })
    return <FormPageComponent {...form} titlePage="Create" />
}

export default Edit
