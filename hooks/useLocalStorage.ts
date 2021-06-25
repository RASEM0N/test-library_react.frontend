import { useEffect, useState } from 'react'

interface ReturnType {
    item: any
    error: string
    setItem: (value: string) => void
}

const useLocalStorage = (key: string, initialValue: any): ReturnType => {
    const [error, setError] = useState<string>('')
    const [item, setItem] = useState<any>(() => {
        return window.localStorage.getItem(key) || initialValue
    })

    useEffect(() => {
        try {
            window.localStorage.setItem(key, item)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }, [item, key])

    return {
        item,
        setItem,
        error,
    }
}

export default useLocalStorage
