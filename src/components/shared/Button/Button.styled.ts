import styled from '@emotion/styled';

interface IProp {
    white: boolean;
}

export const SWrapper = styled('button')(({ white }: IProp) => ({
    borderRadius: '16px',
    background: white ? '#ffffff' : '#2395ff',
    color: white ? '#2395ff' : '#fff',
    padding: white ? '10px 30px' : '10px 36px',
    maxWidth: '128px',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '19px',
    letterSpacing: '0',
    border: white ? '1px solid rgb(35, 149, 255)' : 'none',
    maxHeight: '39px',
    marginRight: white ? '24px' : '0',
}));
