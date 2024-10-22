import { useState, useEffect } from 'react';
import { MyButton } from '@/shared/ui/MyButton/MyButton';
import styles from './calculator-page.module.scss'
import { RollbackOutlined } from '@ant-design/icons';

export default function CalculatorPage() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput((prev) => prev + value);
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        const { key } = event;

        if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
            setInput((prev) => prev + key);
        } else if (key === 'Enter') {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (key === 'Backspace') {
            setInput((prev) => prev.slice(0, -1));
        } else if (key === 'Escape') {
            setInput('');
            setResult('');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [input]);

    return (
        <div className={styles.page}>
            <h2>Calculator</h2>
            <div>
                <input
                    type="text"
                    value={input}
                    readOnly
                    style={{ width: '200px', padding: '10px', fontSize: '24px', textAlign: 'right' }}
                />
                <div style={{ fontSize: '20px', marginTop: '10px' }}>Result: {result}</div>
            </div>

            <div style={{ marginTop: '20px' }} className={styles.page__calculator}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {[1, 2, 3, '+'].map((val) => (
                        <MyButton children={val} handleClick={() => handleButtonClick(val.toString())} />
                    ))}
                    {[4, 5, 6, '-'].map((val) => (
                        <MyButton children={val} handleClick={() => handleButtonClick(val.toString())} />
                    ))}
                    {[7, 8, 9, '*'].map((val) => (
                        <MyButton children={val} handleClick={() => handleButtonClick(val.toString())} />
                    ))}
                    {['C', 0, '=', '/'].map((val) => (
                        <MyButton children={val} handleClick={() => handleButtonClick(val.toString())} />
                    ))}
                </div>
            </div>

            <MyButton
                children={
                    <div style={{ display: 'flex', gap: '4px' }}>
                        Go Back to Home
                        <RollbackOutlined />
                    </div>
                }
                purpose='navigation' href='/'
            />
        </div>
    );
}
