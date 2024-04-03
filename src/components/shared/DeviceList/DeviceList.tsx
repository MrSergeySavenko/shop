import React from 'react';

import { IDataInfo } from '../../../__data__/models/models';
import { DeviceCard } from '../DeviceCard/DeviceCard';
import { SWrapper } from './DeviceList.styled';

interface IProps {
    dataInfo: Array<IDataInfo>;
}

export const DeviceList: React.FC<IProps> = ({ dataInfo }) => {
    const renderDeviseCard = () => {
        return dataInfo.map((infoCard: IDataInfo, i: number) => <DeviceCard infoCard={infoCard} />);
    };

    return <SWrapper>{renderDeviseCard()}</SWrapper>;
};
