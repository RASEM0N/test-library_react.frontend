export interface FormDataBook {
    author: string
    title: string
    previewImage?: string
}

export interface Book extends FormDataBook {
    _id: string
}
