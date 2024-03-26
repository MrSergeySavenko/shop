import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { IDataState, IData, IDataDetails } from '../models/models';

const initialState: IDataState = {
    data: null,
    modalData: null,
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
        modalDataFetchSuccess(state: Draft<IDataState>, action: PayloadAction<IDataDetails>) {
            return { ...state, modalLoading: false, modalData: action.payload };
        },
    },
});

export default dataSlice.reducer;
