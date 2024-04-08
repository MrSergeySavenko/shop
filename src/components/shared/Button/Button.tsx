import React from 'react';

import { SWrapper } from './Button.styled';

interface IProp {
    onClick?: () => void;
    children: string;
    white: boolean;
}

export const Button: React.FC<IProp> = ({ onClick, children, white }) => {
    return (
        <SWrapper white={white} onClick={onClick}>
            {children}
        </SWrapper>
    );
};
