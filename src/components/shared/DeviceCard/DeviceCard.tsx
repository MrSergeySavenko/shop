import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { IDataInfo } from '../../../__data__/models/models';

import { fetchDataModal } from '../../../__data__/actions/storeData.actions';

import { Button } from '../Button/Button';
import { SCost, SDate, SImg, SImgWrapper, SInfoWrapper, SName, SWrapper } from './DeviceCard.styled';

import { RootState } from '../../../__data__/store';
import { dataSlice } from '../../../__data__/reducer';
import { getDate } from '../../../__data__/utils/utils';

interface IProps {
    infoCard: IDataInfo;
}

export const DeviceCard: React.FC<IProps> = ({ infoCard }) => {
    const { theme } = useSelector((state: RootState) => state.shopData);

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(fetchDataModal({ id: infoCard.id }) as any);
        dispatch(dataSlice.actions.modalActiveChange());
        document.body.style.overflowY = 'hidden';
    };

    return (
        <SWrapper>
            <SImgWrapper theme={theme}>
                <SImg src={infoCard.imgUrl} />
            </SImgWrapper>
            <SInfoWrapper>
                <SDate>{getDate(infoCard.date)}</SDate>
                <SCost theme={theme}>{`${infoCard.cost} ${'₽'}`}</SCost>
                <SName theme={theme}>{infoCard.name}</SName>
            </SInfoWrapper>
            <Button white={false} onClick={handleOpenModal}>
                Купить
            </Button>
        </SWrapper>
    );
};
