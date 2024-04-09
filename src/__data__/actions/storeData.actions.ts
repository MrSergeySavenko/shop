import { IData, IDataDetails, IDataInfo } from '../models/models';
import { dataSlice } from '../reducer';
import { AppDispatch } from '../store';

export const fetchDataLow = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.dataFetch());

        const url = 'http://localhost:5000/products';

        const response = await fetch(url);
        const data: IData = await response.json();

        if (response) {
            dispatch(dataSlice.actions.dataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(dataSlice.actions.dataFetchFailure(err as string));
    }
};

export const fetchDataModal = (req: { id: string }) => async (dispatch: AppDispatch) => {
    try {
        dispatch(dataSlice.actions.modalDataFetch());

        const url = 'http://localhost:5000/products/details';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });

        const data: IDataDetails = await response.json();

        if (response) {
            dispatch(dataSlice.actions.modalDataFetchSuccess(data));
        }
    } catch (err: unknown) {
        dispatch(dataSlice.actions.modalDataFetchFailure(err as string));
    }
};
