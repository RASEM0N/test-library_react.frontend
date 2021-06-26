import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

interface ButtonType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string
}

const Button = ({ text, className }: ButtonType): JSX.Element => {
    return (
        <div className={cn(styles.buttonWrapper, className)}>
            <button className={styles.button}>{text}</button>
        </div>
    )
}

export default Button
