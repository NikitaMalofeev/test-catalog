import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';

interface MyButtonProps {
    children: ReactNode;
    href?: string;
    purpose?: string;
    additionalStyle?: CSSProperties;
    handleClick?: () => void;
}

export const MyButton = (props: MyButtonProps) => {
    const { children, href, purpose, additionalStyle, handleClick } = props;

    return (
        <button className={styles.button} onClick={handleClick} style={additionalStyle}>
            {purpose === 'navigation' ? (
                <Link href={href ? href : ''} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {children}
                </Link>
            ) : (
                children
            )}
        </button>
    );
};
