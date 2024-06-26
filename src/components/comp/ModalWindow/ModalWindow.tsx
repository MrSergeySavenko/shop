import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { createPortal } from 'react-dom';

import { ColorBtn } from '../ColorBtn/ColorBtn';
import { RootState } from '../../../__data__/store/store';
import { dataSlice } from '../../../__data__/store/reducer';

import { Button } from '../../shared/Button/Button';
import {
    SBackplateWrapper,
    SBottomWrapper,
    SButtonWrapper,
    SCloseBlockImg,
    SColorConteiner,
    SColumnWrapper,
    SContentWrapper,
    SCost,
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

import { fetchUsersChoose } from '../../../__data__/details/details';

import { IColor } from '../../../__data__/models/models';
import { uniqueKey } from '../../../__data__/utils/utils';
import { useAppDispatch } from '../../../__data__/hook/useRedux';

const portal = document.getElementById('portal');

export const ModalWindow: React.FC = () => {
    const { modalData, theme, modalLoading } = useSelector((state: RootState) => state.shopData);

    const [count, setCount] = useState(1);
    const [color, setColor] = useState<IColor>({ name: '', color: '' });
    const [ok, setOk] = useState(false);
    const [fetchModal, setFetchModal] = useState(false);
    const [text, setText] = useState('');

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (modalData) {
            setColor({ color: modalData?.colors[0].color, name: modalData?.colors[0].name });
        }
    }, [modalData]);

    useEffect(() => {
        renderTextareaText();
    }, [fetchModal]);

    const handleColculateCount = (plus: boolean) => {
        if (plus) {
            return setCount(count + 1);
        }

        if (count !== 1) {
            setCount(count - 1);
        }
    };

    const renderColorBtn = () =>
        modalData?.colors.map((colorItem: IColor, i: number) => {
            return (
                <ColorBtn
                    bagColor={colorItem.color}
                    color={color.color}
                    name={colorItem.name}
                    setColor={setColor}
                    key={uniqueKey(colorItem.name, i)}
                />
            );
        });

    const handleClearData = () => {
        setFetchModal(false);
        dispatch(dataSlice.actions.modalDataFetchSuccess(null));
        document.body.style.overflowY = 'auto';
    };

    const hadleStopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

    const handleFetchUserChoose = async () => {
        setFetchModal(true);
        if (modalData) {
            setOk(
                await fetchUsersChoose({
                    name: modalData?.name,
                    cost: String(modalData.cost),
                    count: count,
                    color: color.name,
                })
            );
        }
    };

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

    const renderTextareaText = () => {
        if (fetchModal) {
            ok
                ? setText('Все в порядке, ваш запрос отправлен в корзину!')
                : setText('Что-то пошло не так, возможно вы не выбрали все позиции');
        } else {
            return setText('Можете написать сюда свои пожелания.');
        }
    };

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
                                    <SCost theme={theme}>{`${modalData.cost} ${'₽'}`}</SCost>
                                </SColumnWrapper>
                            </SWrapperForColumn>
                        </SContentWrapper>
                        <SBottomWrapper>
                            <SDescriptionWrapper>
                                <SNameText>Комментарий к заказу</SNameText>
                                <STextarea theme={theme} placeholder={text} />
                            </SDescriptionWrapper>
                            <SButtonWrapper>
                                <Button white={true} onClick={handleClearData}>
                                    Закрыть
                                </Button>
                                <Button onClick={handleFetchUserChoose} white={false}>
                                    Купить
                                </Button>
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
