import styled from '@emotion/styled';

export const SWrapper = styled('div')(() => ({
    display: 'grid',
    columnGap: '24px',
    gridTemplateColumns: 'repeat(4, 1fr)',
    flexWrap: 'wrap',
    marginBottom: '56px',
    width: '100%',
    justifyItems: 'center',

    '@media (max-width: 1280px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },

    '@media (max-width: 976px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
}));
