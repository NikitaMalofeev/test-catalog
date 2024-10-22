import { NameInput } from "@/features/NameInput/NameInput";
import { MyButton } from "@/shared/ui/MyButton/MyButton";
import styles from './index.module.scss'

export default function Page() {

    return (
        <div className={styles.page}>
            <NameInput />
            <MyButton children='Go to Generate Password Page' purpose='navigation' href='/password-generator' />
            <MyButton children='Go to Calculator Page' purpose='navigation' href='/calculator-page' />
        </div>
    );
};