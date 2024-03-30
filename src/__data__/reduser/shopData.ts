import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData, IDataDetails } from '../models/models';

const initialState: IDataState = {
    data: null,
    modalData: {
        name: 'Беспроводные наушники Apple AirPods Max, голубое небо',
        imgUrl: '/Notebook.png',
        colors: ['#FFF', '#FFCEB9', '#000', '#D9D9D9', '#FFC0FC', '#B6DCFF', '#B9D6AB'],
        cost: 48949,
    },
    isLoading: false,
    modalLoading: false,
    isError: false,
    modalError: false,
};

export const dataSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {
        dataFetch(state: Draft<IDataState>) {
            return { ...state, isLoading: true };
        },
        dataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, isLoading: false, isError: true, error: action.payload };
        },
        dataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<IData>) {
            return { ...state, isLoading: false, data: action.payload };
        },
        modalDataFetch(state: Draft<IDataState>) {
            return { ...state, modalLoading: true };
        },
        modalDataFetchFailure(state: Draft<IDataState>, action: PayloadAction<string>) {
            return { ...state, modalLoading: false, modalError: true, error: action.payload };
        },
        modalDataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<IDataDetails | null>) {
            return { ...state, modalLoading: false, modalData: action.payload };
        },
    },
});

export default dataSlice.reducer;
