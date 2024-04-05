import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { IDataEelement } from '../../../__data__/models/models';
import { SBurgerMenu, SBurgerRow, SLink, SLinkWrapper, SNavBarWrapper, SThemeBtn } from './NavBar.styled';
import { dataSlice } from '../../../__data__/reducer';

export const NavBar: React.FC = () => {
    const { data, theme } = useSelector((state: RootState) => state.shopData);

    const [open, setOpen] = useState(false);

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

    const handleOpenBurgerMenu = () => setOpen(!open);

    return (
        <SNavBarWrapper theme={theme}>
            <SLinkWrapper>{getLinks()}</SLinkWrapper>
            <SBurgerMenu open={open} onClick={handleOpenBurgerMenu}>
                <SBurgerRow />
                <SBurgerRow />
                <SBurgerRow />
                <SBurgerRow />
            </SBurgerMenu>
            <SThemeBtn onClick={handleChangeTheme} theme={theme} />
        </SNavBarWrapper>
    );
};
