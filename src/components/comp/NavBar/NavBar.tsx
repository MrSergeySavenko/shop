import React from 'react';

import styles from './NavBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { IDataEelement } from '../../../__data__/models/models';

export const NavBar: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    if (data) {
        console.log(Object.values(data));
    }

    const getLinks = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return <a className={styles.link}>{deviseInfo.title}</a>;
        });

    return (
        <div className={styles.navBarWrapper}>
            <div className={styles.linkWrapper}>{getLinks()}</div>
        </div>
    );
};
