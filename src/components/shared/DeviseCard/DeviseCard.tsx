import React from 'react';

import { IDataInfo } from '../../../__data__/models/models';
import { Button } from '../Button/Button';

import styles from './DeviseCard.module.scss';

interface IProps {
    name: string;
    cost: number;
    imgUrl: string;
    date: string;
    id: string;
}

export const DeviseCard: React.FC<IProps> = ({ name, cost, imgUrl, date, id }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.img} src={imgUrl} />
            <div className={styles.infoWrapper}>
                <p className={styles.date}>{date}</p>
                <p className={styles.cost}>{`${cost} ${'₽'}`}</p>
                <p className={styles.name}>{name}</p>
            </div>
            <Button id={id} />
        </div>
    );
};
