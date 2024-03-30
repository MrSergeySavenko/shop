import React from 'react';

import { IDataEelement, IDataInfo } from '../../../__data__/models/models';
import { DeviseCard } from '../DeviseCard/DeviseCard';
import { SWrapper } from './DeviceList.styled';

interface IProps {
    dataInfo: Array<IDataInfo>;
}

export const DeviceList: React.FC<IProps> = ({ dataInfo }) => {
    const renderDeviseCard = () => {
        return dataInfo.map((infoCard: IDataInfo, i: number) => <DeviseCard infoCard={infoCard} />);
    };

    return <SWrapper>{renderDeviseCard()}</SWrapper>;
};
