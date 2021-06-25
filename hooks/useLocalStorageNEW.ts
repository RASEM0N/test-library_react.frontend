import { useEffect, useState } from 'react'

interface ReturnType<T> {
    item: string | T
    backUpItem: string | T
    error: string
    setItem: (value: T) => void
}

// ---- TEST VERSION ----
const useLocalStorageNEW = <T>(key: string, initialValue: T): ReturnType<T> => {
    const [item, setItem] = useState<T | string>(() => {
        return window.localStorage.getItem(key) || initialValue
    })
    const [error, setError] = useState<string>('')
    const [backUpItem, setBackUpItem] = useState<typeof item>(item)

    useEffect(() => {
        try {
            let value = item

            if (typeof item === 'string') {
                window.localStorage.setItem(key, item)
            } else {
                value = JSON.stringify(item)
                window.localStorage.setItem(key, value)
            }

            setBackUpItem(value)
        } catch (error) {
            console.log(error.message)
            setError(error.message)
        }
    }, [item, key])

    return {
        item,
        backUpItem,
        setItem,
        error,
    }
}

export default useLocalStorageNEW
