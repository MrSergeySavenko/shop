import styled from '@emotion/styled';

interface IProp {
    bagColor: string;
    activeColor: boolean;
}

export const SColorWrapper = styled('div')(({ bagColor, activeColor }: IProp) => ({
    width: '24px',
    height: '24px',
    border: activeColor ? '3px solid rgb(35, 149, 255);' : '3px solid rgb(145, 159, 171)',
    borderRadius: '16px',
    marginRight: '8px',
    backgroundColor: bagColor,
    marginBottom: '8px',
}));
