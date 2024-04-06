import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../__data__/store';
import { createPortal } from 'react-dom';
import { Button } from '../../shared/Button/Button';
import { ColorBtn } from '../ColorBtn/ColorBtn';
import { dataSlice } from '../../../__data__/reducer';
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
    SLoadingText,
    SMinusConteiner,
    SNameText,
    SPlusConteiner,
    SText,
    STextarea,
    SWrapper,
    SWrapperForColumn,
} from './ModalWindow.styled';

const portal = document.getElementById('portal');

export const ModalWindow: React.FC = () => {
    const { modalData, theme, modalLoading } = useSelector((state: RootState) => state.shopData);

    const [count, setCount] = useState(1);
    const [color, setColor] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        if (modalData) {
            setColor(modalData?.colors[0]);
        }
    }, [modalData]);

    const handleColculateCount = (plus: boolean) => {
        if (count >= 1) {
            plus ? setCount(count + 1) : setCount(count - 1);
        } else {
            setCount(1);
        }
    };

    const renderColorBtn = () =>
        modalData?.colors.map((colorItem: string) => {
            return <ColorBtn bagColor={colorItem} color={color} setColor={setColor} />;
        });

    const handleClearData = () => {
        dispatch(dataSlice.actions.modalDataFetchSuccess(null));
        document.body.style.overflowY = 'auto';
    };

    const hadleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

    const renderLoadingText = () =>
        modalLoading ? (
            <SBackplateWrapper onClick={handleClearData}>
                <SWrapper theme={theme} onClick={hadleStopPropagation}>
                    <SLoadingText theme={theme}>Пожалуйста. подождите, идет загрузка</SLoadingText>
                </SWrapper>
            </SBackplateWrapper>
        ) : (
            <></>
        );

    return createPortal(
        <>
            {modalData ? (
                <SBackplateWrapper onClick={handleClearData}>
                    <SWrapper theme={theme} onClick={hadleStopPropagation}>
                        <SHeaderWrapper>
                            <SHeader theme={theme}>Товар добавлен в корзину</SHeader>
                            <SCloseBlockImg onClick={handleClearData} theme={theme} />
                        </SHeaderWrapper>
                        <SContentWrapper>
                            <SImgConteiner>
                                <SImg src={modalData.imgUrl} alt='Кртинка товара' />
                            </SImgConteiner>
                            <SWrapperForColumn>
                                <SColumnWrapper>
                                    <SNameText>Наименование</SNameText>
                                    <SText theme={theme}>{modalData.name}</SText>
                                </SColumnWrapper>
                                <SColumnWrapper>
                                    <SNameText>Цвет</SNameText>
                                    <SColorConteiner>{renderColorBtn()}</SColorConteiner>
                                </SColumnWrapper>
                            </SWrapperForColumn>
                            <SWrapperForColumn>
                                <SColumnWrapper>
                                    <SNameText>Количество</SNameText>
                                    <SCounterWrapper>
                                        <SPlusConteiner
                                            theme={theme}
                                            onClick={() => handleColculateCount(true)}
                                        />
                                        <SCounterContainer theme={theme}>{count}</SCounterContainer>
                                        <SMinusConteiner
                                            theme={theme}
                                            onClick={() => handleColculateCount(false)}
                                        />
                                    </SCounterWrapper>
                                </SColumnWrapper>
                                <SColumnWrapper>
                                    <SNameText>Цена</SNameText>
                                    <SConst theme={theme}>{`${modalData.cost} ${'₽'}`}</SConst>
                                </SColumnWrapper>
                            </SWrapperForColumn>
                        </SContentWrapper>
                        <SBottomWrapper>
                            <SDescriptionWrapper>
                                <SNameText>Комментарий к заказу</SNameText>
                                <STextarea theme={theme} />
                            </SDescriptionWrapper>
                            <SButtonWrapper>
                                <Button white={true} onClick={handleClearData}>
                                    Закрыть
                                </Button>
                                <Button white={false}>Купить</Button>
                            </SButtonWrapper>
                        </SBottomWrapper>
                    </SWrapper>
                </SBackplateWrapper>
            ) : (
                renderLoadingText()
            )}
        </>,
        portal as HTMLElement
    );
};
