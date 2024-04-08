import React, { useEffect, useState } from 'react';

import { SColorWrapper } from './ColorBtn.styled';

import { IColor } from '../../../__data__/models/models';

interface IProp {
    bagColor: string;
    color: string;
    name: string;
    setColor: (col: IColor) => void;
}

export const ColorBtn: React.FC<IProp> = ({ bagColor, color, setColor, name }) => {
    const [activeColor, setActiveColor] = useState(false);

    useEffect(() => {
        if (bagColor === color) {
            setActiveColor(true);
        } else {
            setActiveColor(false);
        }
        console.log(color);
    }, [color]);

    const handleChangeActiveColor = () => {
        setColor({ color: bagColor, name: name });
    };

    return (
        <SColorWrapper
            activeColor={activeColor}
            bagColor={bagColor}
            onClick={handleChangeActiveColor}
        ></SColorWrapper>
    );
};
