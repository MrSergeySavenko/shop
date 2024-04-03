import React, { useEffect, useState } from 'react';

import { SColorWrapper } from './ColorBtn.styled';

interface IProp {
    bagColor: string;
    color: string;
    setColor: (col: string) => void;
}

export const ColorBtn: React.FC<IProp> = ({ bagColor, color, setColor }) => {
    const [activeColor, setActiveColor] = useState(false);

    useEffect(() => {
        if (bagColor === color) {
            setActiveColor(true);
        } else {
            setActiveColor(false);
        }
    }, [color]);

    const handleChangeActiveColor = () => {
        setColor(bagColor);
    };

    return (
        <SColorWrapper
            activeColor={activeColor}
            bagColor={bagColor}
            onClick={handleChangeActiveColor}
        ></SColorWrapper>
    );
};
