import React from 'react';

import './ProjectNav.less';

export default function ProjectNav({ type, onChange }) {
    return (
        <nav className="project-nav">
            <ul>
                <li><button type="button" className={type === 'professional' ? 'active' : null} onClick={() => onChange('professional')}>Professional</button></li>
                <li><button type="button" className={type === 'personal' ? 'active' : null} onClick={() => onChange('personal')}>Personal</button></li>
            </ul>
        </nav>
    );
}


ProjectNav.propTypes = {
    type: React.PropTypes.string,
    onChange: React.PropTypes.func
};
