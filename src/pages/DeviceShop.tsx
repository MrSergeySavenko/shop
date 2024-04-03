import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/storeData.actions';
import { NavBar } from '../components/comp/NavBar/NavBar';
import { IDataEelement } from '../__data__/models/models';
import { DeviceList } from '../components/shared/DeviceList/DeviceList';
import { ModalWindow } from '../components/comp/ModalWindow/ModalWindow';
import { SAllWrapper, SBlockHeader, SMainWrapper } from './DeviceShop.styled';
import { stringify } from 'querystring';

export const DeviceShop: React.FC = () => {
    const { data, theme } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    return (
        <SAllWrapper theme={theme}>
            <SMainWrapper>
                <NavBar />
                {renderDevises()}
                <ModalWindow />
            </SMainWrapper>
        </SAllWrapper>
    );
};
