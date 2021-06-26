import React from 'react'
import TextField from '../components/Field/TextField'
import Button from '../components/Button/Button'
import { FormDataType } from '../types'

interface PropsType {
    values: FormDataType
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent) => void
    error: Record<keyof FormDataType, string>
    titlePage: string
    buttonText?: string
    uploadFile: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormPageComponent = ({
    error,
    handleChange,
    handleSubmit,
    values,
    titlePage,
    buttonText = 'Create',
    uploadFile,
}: PropsType): JSX.Element => {
    return (
        <div className="form">
            <div className="titlePage">{titlePage}</div>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="title"
                    label="Title"
                    value={values.title}
                    onChange={handleChange}
                    error={error.title}
                />
                <TextField
                    name="author"
                    label="Author"
                    value={values.author}
                    onChange={handleChange}
                    error={error.author}
                />
                <div>
                    <input type="file" name="image-file" onChange={uploadFile} />
                </div>
                <Button text={buttonText} />
            </form>
        </div>
    )
}

export default FormPageComponent
