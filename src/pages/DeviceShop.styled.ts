import styled from '@emotion/styled';

interface IProp {
    theme?: boolean;
    modalActive?: boolean;
    open?: boolean;
}

export const SAllWrapper = styled('div')(({ theme, modalActive }: IProp) => ({
    position: 'relative',
    backgroundColor: theme ? '#23272F' : '#fff',
    overflowY: modalActive ? 'hidden' : 'auto',
}));

export const SMainWrapper = styled('div')(({ open }: IProp) => ({
    margin: '0 auto',
    maxWidth: '1280px',
    padding: '8px 40px',

    '@media (max-width: 671px)': {
        padding: open ? '114px 16px' : '8px 16px',
    },
}));

export const SBlockHeader = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '000',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '39px',
    letterSpacing: '0px',
    marginBottom: '24px',

    '@media (max-width: 671px)': {
        fontSize: '24px',
        lineHeight: '29px',
    },
}));
