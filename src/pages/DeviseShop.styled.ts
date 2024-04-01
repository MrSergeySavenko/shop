import styled from '@emotion/styled';

interface IProp {
    theme: boolean;
}

export const SAllWrapper = styled('div')(({ theme }: IProp) => ({
    backgroundColor: theme ? '#23272F' : '#fff',
}));

export const SMainWrapper = styled('div')(() => ({
    margin: '0 auto',
    maxWidth: '1280px',
    padding: '8px 40px',
}));

export const SBlockHeader = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '000',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '39px',
    letterSpacing: '0%',
    marginBottom: '24px',
}));
