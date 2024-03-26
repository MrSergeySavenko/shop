import React from 'react';

import styles from './Button.module.scss';

interface IProp {
    id: string;
}

export const Button: React.FC<IProp> = ({ id }) => {
    //функция ждя открытия окна покупки, пока ссылки нет
    const hendleModalOpen = () => {};

    //функция для открытия модалки, можно обьединить с первой

    return <button className={styles.wrapper}>Купить</button>;
};
