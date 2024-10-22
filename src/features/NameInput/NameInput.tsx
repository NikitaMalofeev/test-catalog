import useNameStore from '@/app/store/store';
import { useState, useEffect } from 'react';
import styles from './styles.module.scss'
import { MyButton } from '@/shared/ui/MyButton/MyButton';

export const NameInput = () => {
    const [inputName, setInputName] = useState('');
    const { name, setName } = useNameStore();

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setName(storedName);
        }
    }, [setName]);

    const handleSaveName = () => {
        localStorage.setItem('name', inputName);
        setName(inputName);
    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Enter your name"
                className={styles.input}
            />

            <MyButton handleClick={handleSaveName} children='Save Name' additionalStyle={{ borderRadius: '0', margin: '0', maxHeight: '35px' }} />
        </div>
    );
}
