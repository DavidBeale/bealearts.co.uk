import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../configureStore';
import Projects from './Projects';

const store = configureStore();

export default function Root() {
    return (
        <Provider store={store}>
            <Projects />
        </Provider>
    );
}
