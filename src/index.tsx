import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { setupStore } from './__data__/store';

import { Provider } from 'react-redux';

import { DeviceShop } from './pages/DeviceShop';

import moment from 'moment';
import 'moment/locale/ru';

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

moment.locale('ru');

root.render(
    <Provider store={store}>
        <DeviceShop />
    </Provider>
);
