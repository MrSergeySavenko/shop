import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/Button/Button';
import { ColorBtn } from '../ColorBtn/ColorBtn';
import { dataSlice } from '../../../__data__/reduser';
import {
    SBackplateWrapper,
    SBottomWrapper,
    SButtonWrapper,
    SCloseBlockImg,
    SColorConteiner,
    SColumnWrapper,
    SConst,
    SContentWrapper,
    SCounterContainer,
    SCounterWrapper,
    SDescriptionWrapper,
    SHeader,
    SHeaderWrapper,
    SImg,
    SImgConteiner,
    SMinusConteiner,
    SNameText,
    SPlusConteiner,
    SText,
    STextarea,
    SWrapper,
} from './ModalWindow.styled';

const portal = document.getElementById('portal');

export const ModalWindow: React.FC = () => {
    const { modalData } = useSelector((state: RootState) => state.shopData);

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    const handleColculateCount = (plus: boolean) => {
        if (count >= 0) {
            plus ? setCount(count + 1) : setCount(count - 1);
        } else {
            setCount(0);
        }
    };

    const renderColorBtn = () =>
        modalData?.colors.map((colorItem: string) => {
            return <ColorBtn bagColor={colorItem} color={color} setColor={setColor} />;
        });

    return createPortal(
        <>
            {modalData ? (
                <SBackplateWrapper>
                    <SWrapper>
                        <SHeaderWrapper>
                            <SHeader>Товар добавлен в корзину</SHeader>
                            <SCloseBlockImg />
                        </SHeaderWrapper>
                        <SContentWrapper>
                            <SImgConteiner>
                                <SImg src={modalData.imgUrl} alt='Кртинка товара' />
                            </SImgConteiner>
                            <SColumnWrapper>
                                <SNameText>Наименование</SNameText>
                                <SText>{modalData.name}</SText>
                            </SColumnWrapper>
                            <SColumnWrapper>
                                <SNameText>Цвет</SNameText>
                                <SColorConteiner>{renderColorBtn()}</SColorConteiner>
                            </SColumnWrapper>
                            <SColumnWrapper>
                                <SNameText>Количество</SNameText>
                                <SCounterWrapper>
                                    <SPlusConteiner onClick={() => handleColculateCount(true)} />
                                    <SCounterContainer>{count}</SCounterContainer>
                                    <SMinusConteiner onClick={() => handleColculateCount(false)} />
                                </SCounterWrapper>
                            </SColumnWrapper>
                            <SColumnWrapper>
                                <SNameText>Цена</SNameText>
                                <SConst>{`${modalData.cost} ${'₽'}`}</SConst>
                            </SColumnWrapper>
                        </SContentWrapper>
                        <SBottomWrapper>
                            <SDescriptionWrapper>
                                <SNameText>Комментарий к заказу</SNameText>
                                <STextarea />
                            </SDescriptionWrapper>
                            <SButtonWrapper>
                                <Button
                                    white={true}
                                    onClick={() => dispatch(dataSlice.actions.modalDataFetchSuccess(null))}
                                >
                                    Закрыть
                                </Button>
                                <Button white={false}>Купить</Button>
                            </SButtonWrapper>
                        </SBottomWrapper>
                    </SWrapper>
                </SBackplateWrapper>
            ) : (
                <></>
            )}
        </>,
        portal as HTMLElement
    );
};
