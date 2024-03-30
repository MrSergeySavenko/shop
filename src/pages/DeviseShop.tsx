import React, { useEffect } from 'react';

import styles from './DeviseShop.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/storeData.actions';
import { NavBar } from '../components/comp/NavBar/NavBar';
import { IDataEelement } from '../__data__/models/models';
import { DeviceList } from '../components/shared/DeviseList/DeviceList';
import { ModalWindow } from '../components/comp/ModalWindow/ModalWindow';
import { SBlockHeader, SMainWrapper } from './DeviseShop.styled';

export const DeviseShop: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

    const renderDevises = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <>
                    <SBlockHeader>{deviseInfo.title}</SBlockHeader>
                    <DeviceList dataInfo={deviseInfo.info} />
                </>
            );
        });

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    return (
        <SMainWrapper>
            <NavBar />
            {renderDevises()}
            <ModalWindow />
        </SMainWrapper>
    );
};
