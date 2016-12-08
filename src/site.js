import React from 'react';
import { render } from 'react-dom';

import Projects from './app/containers/Projects';

require('./css/site.less');

render(
    <Projects />,
    document.getElementById('projects-root')
);
