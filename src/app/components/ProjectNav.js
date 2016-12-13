import React from 'react';

import style from './ProjectNav.less';

export default function ProjectNav(props) {
    return (
        <nav className="project-nav">
            <ul>
                <li><button type="button" className={props.type === 'professional' ? 'active' : null} onClick={() => props.onChange('professional')}>Professional</button></li>
                <li><button type="button" className={props.type === 'personal' ? 'active' : null}onClick={() => props.onChange('personal')}>Personal</button></li>
            </ul>
        </nav>
    );
}


ProjectNav.propTypes = {
    type: React.PropTypes.string,
    onChange: React.PropTypes.func
};
