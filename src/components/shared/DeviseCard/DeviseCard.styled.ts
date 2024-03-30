import styled from '@emotion/styled';

export const SWrapper = styled('div')(() => ({
    maxWidth: '282px',
    display: 'flex',
    flexDirection: 'column',
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

export const SCost = styled('p')(() => ({
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    marginBottom: '8px',
}));

export const SName = styled('p')(() => ({
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '19px',
    letterSpacing: '0',
}));