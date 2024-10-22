import { useState } from 'react';
import { MyButton } from '@/shared/ui/MyButton/MyButton';
import styles from './generate-password.module.scss';
import { RollbackOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

export default function PasswordGeneratorPage() {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const generatePassword = (length: number) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    return generatedPassword;
  };


  const handleGeneratePassword = () => {
    const newPassword = generatePassword(12);
    setPassword(newPassword);
    setIsPasswordVisible(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.page__title}>Generate Password</h2>
      <MyButton children='Generate Password' handleClick={handleGeneratePassword} />

      {password && (
        <div>
          <h2 className={styles.page__subtitle}>Your Generated Password:</h2>

          <div className={styles.password_container}>
            <div className={styles.page__password}>
              <span>{isPasswordVisible ? password : '*'.repeat(password.length)}</span>
              <MyButton handleClick={togglePasswordVisibility} additionalStyle={{ margin: '0' }}>
                {isPasswordVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </MyButton>
            </div>


          </div>
        </div>
      )}

      <MyButton
        children={
          <div style={{ display: 'flex', gap: '4px' }}>
            Go Back to Home
            <RollbackOutlined />
          </div>
        }
        purpose='navigation'
        href='/'
      />
    </div>
  );
}
