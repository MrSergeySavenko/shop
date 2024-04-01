import styled from '@emotion/styled';

export const SBackplateWrapper = styled('div')(() => ({
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.64)',
    alignItems: 'center',
}));

interface IProp {
    theme: boolean;
}

export const SWrapper = styled('div')(({ theme }: IProp) => ({
    maxWidth: '1200px',
    position: 'absolute',
    marginLeft: '24px',
    marginRight: '24px',
    left: '0',
    right: '0',
    top: '64px',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 24px',
    borderRadius: '16px',
    backgroundColor: theme ? '#23272F' : '#fff',
}));

export const SHeaderWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: '32px',
}));

export const SHeader = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '39px',
    letterSpacing: '0',
}));

export const SCloseBlockImg = styled('div')(() => ({
    width: '24px',
    height: '24px',
    backgroundImage: "url('/Close.svg')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}));

export const SContentWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '32px',
}));

export const SImgConteiner = styled('div')(() => ({
    width: '211px',
    height: '200px',
    borderRadius: '16px',
    backgroundColor: '#a4a8ac1a',
    marginRight: '24px',
}));

export const SImg = styled('img')(() => ({
    width: '211px',
    height: '200px',
}));

export const SWrapperForColumn = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',

    '@media (max-width: 1001px)': {
        flexDirection: 'column',
    },
}));

export const SColumnWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginRight: '24px',
}));

export const SNameText = styled('p')(() => ({
    color: '#919fab',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0%',
    marginBottom: '8px',
}));

export const SText = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0',
    maxWidth: '201px',
}));

export const SBottomWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
}));

export const SDescriptionWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const SButtonWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
}));

export const STextarea = styled('textarea')(({ theme }: IProp) => ({
    width: '532px',
    height: '100px',
    background: theme ? '#363B44' : '#f3f4f6',
    borderRadius: '16px',
    border: 'none',
    padding: '16px',
    outline: 'none',
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0',
}));

export const SConst = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontWeight: '400',
    lineHeight: '29px',
    letterSpacing: '0',
}));

export const SCounterWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    marginRight: '112px',
}));

export const SCounterContainer = styled('div')(({ theme }: IProp) => ({
    padding: '8px 12.5px',
    borderTop: theme ? '1px solid #919FAB' : '1px solid #919fab',
    borderBottom: theme ? '1px solid #919FAB' : '1px solid #919fab',
    color: theme ? '#FFFFFF' : '#0000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0',
}));

export const SPlusConteiner = styled('div')(({ theme }: IProp) => ({
    height: '35px',
    width: '36.5px',
    border: theme ? '1px solid #919FAB' : '1px solid #919fab',
    backgroundImage: "url('/Plus.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '16px 0 0 16px',
}));

export const SMinusConteiner = styled('div')(({ theme }: IProp) => ({
    height: '35px',
    width: '35.5px',
    border: theme ? '1px solid #919FAB' : '1px solid #919fab',
    borderRadius: '0 16px 16px 0',
    backgroundImage: "url('/Minus.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
}));

export const SColorConteiner = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '140px',
}));
