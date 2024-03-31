import styled from '@emotion/styled';

interface IProp {
    theme: boolean;
}

export const SNavBarWrapper = styled('div')(({ theme }: IProp) => ({
    position: 'relative',
    padding: '16px 0',
    backgroundColor: theme ? '#363B44' : '#f3f4f6',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '56px',
    boxShadow: theme ? 'none' : '7px 5px 5px #ebedf0',
}));

export const SLinkWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const SLink = styled('a')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
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

export const SThemeBtn = styled('div')(({ theme }: IProp) => ({
    position: 'absolute',
    width: theme ? '19px' : '24px',
    height: theme ? '18px' : '24px',
    backgroundImage: theme ? "url('/ThemeMoon.svg')" : "url('/sun.svg')",
    top: theme ? '16px' : '15px',
    right: theme ? '27px' : '24px',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%',
}));
