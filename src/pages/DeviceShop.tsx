import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';

import { fetchDataLow } from '../__data__/actions/storeData.actions';

import { NavBar } from '../components/comp/NavBar/NavBar';
import { IDataEelement } from '../__data__/models/models';
import { DeviceList } from '../components/shared/DeviceList/DeviceList';
import { ModalWindow } from '../components/comp/ModalWindow/ModalWindow';
import { SAllWrapper, SBlockHeader, SMainWrapper } from './DeviceShop.styled';
import { BackToTopBtn } from '../components/comp/BackToTopBtn/BackToTopBtn';

export const DeviceShop: React.FC = () => {
    const [open, setOpen] = useState(false);

    const { data, theme, modalActive, isLoading } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    const renderDevises = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <>
                    <SBlockHeader id={String(i)} theme={theme}>
                        {deviseInfo.title}
                    </SBlockHeader>
                    <DeviceList dataInfo={deviseInfo.info} />
                </>
            );
        });

    const renderPage = () =>
        isLoading ? (
            <></>
        ) : (
            <SAllWrapper theme={theme} modalActive={modalActive}>
                <SMainWrapper open={open}>
                    <NavBar open={open} setOpen={setOpen} />
                    {renderDevises()}
                    <ModalWindow />
                </SMainWrapper>
                {window.scrollY > 0 ? <BackToTopBtn /> : <></>}
            </SAllWrapper>
        );

    return renderPage();
};
