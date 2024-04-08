import React from 'react';

import { IDataInfo } from '../../../__data__/models/models';

import { DeviceCard } from '../DeviceCard/DeviceCard';
import { SWrapper } from './DeviceList.styled';
import { uniqueKey } from '../../../__data__/utils/utils';

interface IProps {
    dataInfo: Array<IDataInfo>;
}

export const DeviceList: React.FC<IProps> = ({ dataInfo }) => {
    const renderDeviseCard = () => {
        return dataInfo.map((infoCard: IDataInfo, i: number) => (
            <DeviceCard key={uniqueKey(infoCard.name, i)} infoCard={infoCard} />
        ));
    };

    return <SWrapper>{renderDeviseCard()}</SWrapper>;
};
