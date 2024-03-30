import React from 'react';

import { IDataInfo } from '../../../__data__/models/models';
import { Button } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { fetchDataModal } from '../../../__data__/actions/storeData.actions';
import { SCost, SDate, SImg, SInfoWrapper, SName, SWrapper } from './DeviseCard.styled';

interface IProps {
    infoCard: IDataInfo;
}

export const DeviseCard: React.FC<IProps> = ({ infoCard }) => {
    const dispatch = useDispatch();

    return (
        <SWrapper>
            <SImg src={infoCard.imgUrl} />
            <SInfoWrapper>
                <SDate>{infoCard.date}</SDate>
                <SCost>{`${infoCard.cost} ${'₽'}`}</SCost>
                <SName>{infoCard.name}</SName>
            </SInfoWrapper>
            <Button white={false} onClick={() => dispatch(fetchDataModal(infoCard) as any)}>
                Купить
            </Button>
        </SWrapper>
    );
};
