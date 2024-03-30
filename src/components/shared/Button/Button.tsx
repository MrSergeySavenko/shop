import React from 'react';

import styles from './Button.module.scss';
import { SWrapper } from './Button.styled';

interface IProp {
    onClick?: () => void;
    children: string;
    white: boolean;
}

export const Button: React.FC<IProp> = ({ onClick, children, white }) => {
    //функция ждя открытия окна покупки, пока ссылки нет
    const hendleModalOpen = () => {};

    //функция для открытия модалки, можно обьединить с первой

    return (
        <SWrapper white={white} onClick={onClick}>
            {children}
        </SWrapper>
    );
};
