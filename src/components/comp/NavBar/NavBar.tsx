import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { IDataEelement } from '../../../__data__/models/models';
import {
    SBurgerMenu,
    SBurgerRow,
    SCloseBurger,
    SLink,
    SLinkWrapper,
    SNavBarWrapper,
    SThemeBtn,
} from './NavBar.styled';
import { dataSlice } from '../../../__data__/reducer';

export const NavBar: React.FC = () => {
    const { data, theme, isLoading } = useSelector((state: RootState) => state.shopData);

    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(0);

    const dispath = useDispatch();

    const getLinks = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <SLink href={String(i)} theme={theme} open={open}>
                    {deviseInfo.title}
                </SLink>
            );
        });

    const handleChangeTheme = () => dispath(dataSlice.actions.changeTheme());

    const handleOpenBurgerMenu = () => setOpen(!open);

    useEffect(() => {
        if (document.documentElement.clientWidth <= 601) {
            setWidth(document.documentElement.clientWidth - 64);
        }
    }, [document.documentElement.clientWidth]);

    return (
        <SNavBarWrapper theme={theme} open={open} width={width}>
            <SBurgerMenu open={open} onClick={handleOpenBurgerMenu}>
                {open ? (
                    <SCloseBurger src={theme ? '/CloseWhite.svg' : '/Close.svg'} open={open} />
                ) : (
                    <>
                        <SBurgerRow theme={theme} />
                        <SBurgerRow theme={theme} />
                        <SBurgerRow theme={theme} />
                        <SBurgerRow theme={theme} />
                    </>
                )}
            </SBurgerMenu>
            <SLinkWrapper open={open}>{getLinks()}</SLinkWrapper>
            <SThemeBtn onClick={handleChangeTheme} theme={theme} open={open} />
        </SNavBarWrapper>
    );
};
