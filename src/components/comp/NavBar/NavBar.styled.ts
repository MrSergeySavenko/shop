import styled from '@emotion/styled';

interface IProp {
    theme: boolean;
}

export const SNavBarWrapper = styled('div')(({ theme }: IProp) => ({
    position: 'relative',
    padding: '16px 16px',
    backgroundColor: theme ? '#363B44' : '#f3f4f6',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '56px',
    boxShadow: theme ? 'none' : '7px 5px 5px #ebedf0',

    '@media (max-width: 601px)': {
        justifyContent: 'flex-start',
    },
}));

export const SLinkWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '@media (max-width: 601px)': {
        display: 'none',
    },
}));

interface INavProp {
    open: boolean;
}

export const SBurgerMenu = styled('div')(({ open }: INavProp) => ({
    display: 'none',
    flexDirection: 'column',
    width: '24px',
    height: '18px',
    justifyContent: 'space-between',
    alignContent: 'space-between',

    marginBottom: open ? '24px' : '0',

    '@media (max-width: 601px)': {
        display: 'flex',
    },
}));

export const SBurgerRow = styled('div')(() => ({
    border: '1px solid rgb(0, 0, 0)',
    borderRadius: '10px',
    height: '0px',

    '&: last-child': {
        marginBottom: '0',
    },
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
    textDecoration: 'none',
    cursor: 'pointer',

    '&:lastChild': {
        marginRight: '0',
    },
}));

export const SThemeBtn = styled('div')(({ theme }: IProp) => ({
    position: 'absolute',
    width: theme ? '19px' : '24px',
    height: theme ? '18px' : '24px',
    backgroundImage: theme ? "url('/ThemeMoon.svg')" : "url('/ThemeSun.svg')",
    top: theme ? '16px' : '15px',
    right: theme ? '27px' : '24px',
    border: 'none',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '80%',
    cursor: 'pointer',
}));
