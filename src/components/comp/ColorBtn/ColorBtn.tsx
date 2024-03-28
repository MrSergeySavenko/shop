import React from 'react';

import styles from './ColorBtn.module.scss';
import { SColorWrapper } from './ColorBtn.styled';

interface IProp {
    bagColor: string;
    color: string;
}

export const ColorBtn: React.FC<IProp> = ({ bagColor, color }) => {
    return <SColorWrapper bagColor={bagColor}></SColorWrapper>;
};
