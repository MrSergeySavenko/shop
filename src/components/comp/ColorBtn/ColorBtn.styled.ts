import styled from '@emotion/styled';

interface IProp {
    bagColor: string;
}

export const SColorWrapper = styled('div')(({ bagColor }: IProp) => ({
    width: '24px',
    height: '24px',
    border: '2px solid rgb(145, 159, 171)',
    borderRadius: '16px',
    marginRight: '8px',
    backgroundColor: bagColor,
    marginBottom: '8px',
}));
