import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './TextField.module.css'
import cn from 'classnames'

interface TextFieldPropsType
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string
    label: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error: string | null
}

const TextField = ({
    error,
    label,
    name,
    onChange,
    value,
    className,
    ...props
}: TextFieldPropsType): JSX.Element => {
    return (
        <div {...props} className={cn(styles.textField, className)}>
            <div className={styles.title}>{label}</div>
            <input
                formNoValidate={true}
                className={cn(styles.input, {
                    [styles.isError]: error,
                })}
                type="text"
                name={name}
                placeholder={label}
                value={value}
                onChange={onChange}
            />
            <div className={styles.error}>{error && error}</div>
        </div>
    )
}

export default TextField
