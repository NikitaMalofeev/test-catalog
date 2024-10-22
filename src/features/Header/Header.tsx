import useNameStore from '@/app/store/store';
import styles from './styles.module.scss';
import { useEffect } from 'react';


export default function Header() {
    const { name, setName } = useNameStore();

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, [setName]);

    return (
        <div className={styles.header}>
            <h1 className={styles.header__title}>Hello, {name ? name : 'Guest'}</h1>
        </div>
    );
};