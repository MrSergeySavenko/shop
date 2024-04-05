import React from 'react';
import { SImg, SWrapper } from './BackToTopBtn.styled';

export const BackToTopBtn: React.FC = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <SWrapper onClick={handleScrollTop}>
            <SImg src={'/WhiteArrow.svg'} />
        </SWrapper>
    );
};
