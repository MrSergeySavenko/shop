import styled from '@emotion/styled';

export const SNavBarWrapper = styled('div')(() => ({
    padding: '16px 0',
    backgroundColor: '#f3f4f6',
    borderRadius: '16px',
    width: '1200px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '56px',
    boxShadow: '7px 5px 5px #ebedf0',
}));

export const SLinkWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const SLink = styled('a')(() => ({
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    marginRight: '32px',

    '&:lastChild': {
        marginRight: '0',
    },
}));
