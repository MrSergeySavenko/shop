import React from 'react';

import styles from './NavBar.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { IDataEelement } from '../../../__data__/models/models';
import { SLink, SLinkWrapper, SNavBarWrapper } from './NavBar.styled';

export const NavBar: React.FC = () => {
    const { data } = useSelector((state: RootState) => state.shopData);

    if (data) {
        console.log(Object.values(data));
    }

    const getLinks = () =>
        data &&
        Object.values(data).map((deviseInfo: IDataEelement, i: number) => {
            return <SLink>{deviseInfo.title}</SLink>;
        });

    return (
        <SNavBarWrapper>
            <SLinkWrapper>{getLinks()}</SLinkWrapper>
        </SNavBarWrapper>
    );
};
