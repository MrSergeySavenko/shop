import styled from '@emotion/styled';

export const SWrapper = styled('div')(() => ({
    position: 'fixed',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#2395FF',
    bottom: '64px',
    right: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '@media (max-width: 745px)': {
        bottom: '28px',
        right: '24px',
    },

    '@media (max-width: 501px)': {
        bottom: '23px',
        right: '16px',
    },
}));

export const SImg = styled('img')(() => ({
    width: '18px',
    height: '18px',
}));
