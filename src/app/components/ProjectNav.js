import React from 'react';

import style from './ProjectNav.less';

export default function ProjectNav(props) {
    console.log(style);
    return (
        <nav className="project-nav">
            <ul>
                <li><button onClick={() => props.onChange('professional')}>Professional</button></li>
                <li><button onClick={() => props.onChange('personal')}>Personal</button></li>
            </ul>
        </nav>
    );
}


ProjectNav.propTypes = {
    onChange: React.PropTypes.func
};
