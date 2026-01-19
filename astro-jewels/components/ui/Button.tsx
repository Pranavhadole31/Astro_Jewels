import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    fullWidth?: boolean;
}

export default function Button({
    children,
    variant = 'primary',
    href,
    className = '',
    onClick,
    type = 'button',
    fullWidth = false,
}: ButtonProps) {
    const classNames = `${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''} ${className}`;

    if (href) {
        return (
            <Link href={href} className={classNames}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classNames} onClick={onClick}>
            {children}
        </button>
    );
}
