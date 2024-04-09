import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { shopData } from './reducer';

const rootReducer = combineReducers({ shopData });

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppState = AppStore['getState'];
export type AppDispatch = AppStore['dispatch'];
