import React, { useState } from 'react'

interface FormReturnType<T extends object> {
    values: T
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent) => void
    error: Record<keyof T, string>
}

interface FormConfigType<T extends object> {
    initialValues: T
    onSubmit: (values: T) => void
    schema?: unknown
    minLength?: number
    dynamicValidation?: boolean
}

const useForm = <T extends object>({
    initialValues,
    onSubmit,
    minLength = 6,
    dynamicValidation = true,
}: FormConfigType<T>): FormReturnType<T> => {
    const [values, setValues] = useState<T>(initialValues)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [error, setError] = useState<Record<keyof T, string>>(() => {
        const errors: any = {}
        Object.keys(values).forEach((key) => {
            errors[key] = ''
        })
        return errors
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name
        const value = e.target.value

        setValues((prev) => {
            return { ...prev, [name]: value }
        })

        // Валидация на коленке
        if (isSubmitted && dynamicValidation) {
            const error =
                value.length < minLength ? `Длина поля ${name} меньше ${minLength} символов` : null
            setError((prev) => {
                return { ...prev, [name]: error }
            })
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        let isError = false
        if (!isSubmitted) {
            setIsSubmitted(true)
        }
        // валидация
        Object.keys(values).forEach((key) => {
            //@ts-ignore
            const value: string = values[key] as string

            if (value.length < minLength) {
                isError = true
                const error = `Длина поля ${key} меньше ${minLength} символов`
                setError((prev) => {
                    return { ...prev, [key]: error }
                })
            }
        })

        if (isError) {
            return
        }

        // прошло валюдацию
        onSubmit(values)
    }

    return {
        values,
        handleChange,
        handleSubmit,
        error,
    }
}

export default useForm
