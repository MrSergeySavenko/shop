import React from 'react';

import styles from './NavBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { IDataEelement } from '../../../__data__/models/models';
import { SLink, SLinkWrapper, SNavBarWrapper, SThemeBtn } from './NavBar.styled';
import { dataSlice } from '../../../__data__/reducer';

export const NavBar: React.FC = () => {
    const { data, theme } = useSelector((state: RootState) => state.shopData);

    const dispath = useDispatch();

    const getLinks = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <SLink href={String(i)} theme={theme}>
                    {deviseInfo.title}
                </SLink>
            );
        });

    const handleChangeTheme = () => dispath(dataSlice.actions.changeTheme());

    return (
        <SNavBarWrapper theme={theme}>
            <SLinkWrapper>{getLinks()}</SLinkWrapper>
            <SThemeBtn onClick={handleChangeTheme} theme={theme} />
        </SNavBarWrapper>
    );
};
