import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import Root from './app/containers/Root';

require('./css/site.less');

render(
    <Root />,
    document.getElementById('projects-root')
);
