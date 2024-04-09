import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store/store';

import { fetchDataLow } from '../__data__/store/actions/storeData.actions';

import { NavBar } from '../components/comp/NavBar/NavBar';
import { IDataEelement } from '../__data__/models/models';
import { DeviceList } from '../components/shared/DeviceList/DeviceList';
import { ModalWindow } from '../components/comp/ModalWindow/ModalWindow';
import { SAllWrapper, SBlockHeader, SMainWrapper } from './DeviceShop.styled';
import { BackToTopBtn } from '../components/comp/BackToTopBtn/BackToTopBtn';
import { uniqueKey } from '../__data__/utils/utils';
import { useAppDispatch } from '../__data__/hook/useRedux';

export const DeviceShop: React.FC = () => {
    const [open, setOpen] = useState(false);

    const { data, theme, modalActive, isLoading, isError } = useSelector(
        (state: RootState) => state.shopData
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    const renderDevises = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <>
                    <SBlockHeader key={uniqueKey(deviseInfo.title, i)} id={String(i)} theme={theme}>
                        {deviseInfo.title}
                    </SBlockHeader>
                    <DeviceList key={uniqueKey(deviseInfo.info, i)} dataInfo={deviseInfo.info} />
                </>
            );
        });

    const renderPage = () =>
        isLoading ? (
            <SAllWrapper>
                <SMainWrapper>
                    <SBlockHeader>Происходит загрузка,подождите пожалуйста!</SBlockHeader>
                </SMainWrapper>
            </SAllWrapper>
        ) : isError ? (
            <SAllWrapper>
                <SMainWrapper>
                    <SBlockHeader>Возникла ошибка! Error!Error!Error!</SBlockHeader>
                </SMainWrapper>
            </SAllWrapper>
        ) : (
            <SAllWrapper theme={theme} modalActive={modalActive}>
                <SMainWrapper open={open}>
                    <NavBar open={open} setOpen={setOpen} />
                    {renderDevises()}
                    <ModalWindow />
                </SMainWrapper>
                <BackToTopBtn />
            </SAllWrapper>
        );

    return renderPage();
};
