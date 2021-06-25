import React, { useState } from 'react'
import TextField from './components/Field/TextField'
import { useForm } from './hooks'

interface FormDataType {
    title: string
    author: string
}

const App = () => {
    const { error, handleChange, handleSubmit, values } = useForm<FormDataType>({
        initialValues: {
            author: '',
            title: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
    })

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <TextField
                    name="author"
                    label="Author"
                    value={values.author}
                    onChange={handleChange}
                    error={error.author}
                />
                <TextField
                    name="title"
                    label="Title"
                    value={values.title}
                    onChange={handleChange}
                    error={error.title}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default App
