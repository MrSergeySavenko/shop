import React, { useState } from 'react';

import styles from './ModalWindow.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/Button/Button';
import { ColorBtn } from '../ColorBtn/ColorBtn';

const portal = document.getElementById('portal');

export const ModalWindow: React.FC = () => {
    const { modalData } = useSelector((state: RootState) => state.shopData);

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    const handleColculateCount = (plus: boolean) => {
        if (count >= 0) {
            plus ? setCount(count + 1) : setCount(count - 1);
        } else {
            setCount(0);
        }
    };

    const renderColorBtn = () =>
        modalData?.colors.map((colorItem: string) => {
            return <ColorBtn bagColor={colorItem} color={color} />;
        });

    return createPortal(
        <>
            {modalData ? (
                <div className={styles.backplateWrapper}>
                    <div className={styles.wrapper}>
                        <div className={styles.headerWrapper}>
                            <p className={styles.header}>Товар добавлен в корзину</p>
                            <div className={styles.closeBlockImg} />
                        </div>
                        <div className={styles.contentWrapper}>
                            <div className={styles.imgContainer}>
                                <img className={styles.img} src={modalData.imgUrl} alt='Кртинка товара' />
                            </div>
                            <div className={styles.columnWrapper}>
                                <p className={styles.nameText}>Наименование</p>
                                <p className={styles.text}>{modalData.name}</p>
                            </div>
                            <div className={styles.columnWrapper}>
                                <p className={styles.nameText}>Цвет</p>
                                <div className={styles.colorWrapper}>{renderColorBtn()}</div>
                            </div>
                            <div className={styles.columnWrapper}>
                                <p className={styles.nameText}>Количество</p>
                                <div className={styles.counterWrapper}>
                                    <div
                                        className={styles.plusConteiner}
                                        onClick={() => handleColculateCount(true)}
                                    />
                                    <div className={styles.counterContainer}>{count}</div>
                                    <div
                                        className={styles.minusConteiner}
                                        onClick={() => handleColculateCount(false)}
                                    />
                                </div>
                            </div>
                            <div className={styles.columnWrapper}>
                                <p className={styles.nameText}>Цена</p>
                                <p className={styles.cost}>{`${modalData.cost} ${'₽'}`}</p>
                            </div>
                        </div>
                        <div className={styles.bottomWrapper}>
                            <div className={styles.descriptionWrapper}>
                                <p className={styles.nameText}>Комментарий к заказу</p>
                                <textarea className={styles.textarea} />
                            </div>
                            <div className={styles.buttonWrapper}>
                                <Button white={true}>Закрыть</Button>
                                <Button>Купить</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>,
        portal as HTMLElement
    );
};
