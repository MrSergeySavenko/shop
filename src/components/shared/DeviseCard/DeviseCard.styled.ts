import styled from '@emotion/styled';

interface IProp {
    theme: boolean;
}

export const SWrapper = styled('div')(() => ({
    maxWidth: '282px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px',
}));

export const SImgWrapper = styled('div')(({ theme }: IProp) => ({
    height: '263px',
    marginBottom: '16px',
    borderRadius: '16px',
    background: theme ? '#fff' : '#A4A8AC1A',
}));

export const SImg = styled('img')(() => ({
    height: '263px',
    width: '282px',
    marginBottom: '16px',
}));

export const SInfoWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'self-start',
    marginBottom: '16px',
}));

export const SDate = styled('p')(() => ({
    color: '#919fab',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    marginBottom: '8px',
}));

export const SCost = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    marginBottom: '8px',
}));

export const SName = styled('p')(({ theme }: IProp) => ({
    color: theme ? '#fff' : '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0',
}));
