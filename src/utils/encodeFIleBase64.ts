type Type = (file: File, callback: (base: string) => void) => void

const encodeFileBase64: Type = (file, callback) => {
    try {
        const reader = new FileReader()
        if (file) {
            reader.readAsDataURL(file)
            reader.onload = () => {
                const Base64 = reader.result
                callback(Base64 as string)
            }
            reader.onerror = (error) => {
                console.log('error: ', error)
            }
        }
    } catch (e) {
        console.log(e.message)
    }
}

export default encodeFileBase64
