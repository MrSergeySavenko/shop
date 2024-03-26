import React, { useEffect } from 'react';

import styles from './DeviseShop.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../__data__/store';
import { fetchDataLow } from '../__data__/actions/storeData.actions';
import { NavBar } from '../components/NavBar/NavBar';
import { IDataEelement } from '../__data__/models/models';
import { DeviceList } from '../components/shared/DeviseList/DeviceList';

export const DeviseShop: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

    const renderDevises = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return (
                <>
                    <p className={styles.blockHeader}>{deviseInfo.title}</p>
                    <DeviceList dataInfo={deviseInfo.info} />
                </>
            );
        });

    useEffect(() => {
        dispatch(fetchDataLow() as any);
    }, []);

    return (
        <div className={styles.mainpageWrapper}>
            <NavBar />
            {renderDevises()}
        </div>
    );
};
