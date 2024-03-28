import React from 'react';

import styles from './Button.module.scss';

interface IProp {
    id?: string;
    onClick?: () => void;
    children: string;
    white?: boolean;
}

export const Button: React.FC<IProp> = ({ id, onClick, children, white }) => {
    //функция ждя открытия окна покупки, пока ссылки нет
    const hendleModalOpen = () => {};

    //функция для открытия модалки, можно обьединить с первой

    return (
        <button className={white ? styles.whiteWrapper : styles.wrapper} onClick={onClick}>
            {children}
        </button>
    );
};
