import React from 'react';

import styles from './DeviceList.module.scss';
import { IDataEelement, IDataInfo } from '../../../__data__/models/models';
import { DeviseCard } from '../DeviseCard/DeviseCard';

interface IProps {
    dataInfo: Array<IDataInfo>;
}

export const DeviceList: React.FC<IProps> = ({ dataInfo }) => {
    const renderDeviseCard = () => {
        return dataInfo.map((infoCard: IDataInfo, i: number) => (
            <DeviseCard
                name={infoCard.name}
                cost={infoCard.cost}
                date={infoCard.date}
                imgUrl={infoCard.imgUrl}
                id={infoCard.id}
            />
        ));
    };

    return <div className={styles.wrapper}>{renderDeviseCard()}</div>;
};
