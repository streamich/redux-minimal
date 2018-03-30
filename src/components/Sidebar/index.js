import React from 'react';
import PropTypes from 'prop-types';
import {jsx} from '../../nano';

const width = 300;

const SidebarPanel = jsx('aside', {
    z: 100,
    bg: '#fff',
    bdr: '1px solid #ccc',
    pos: 'fixed',
    w: width + 'px',
    h: '100%',
    top: 0,
    left: 0,
    ov: 'hidden',
    trs: 'left 0.2s',
    willChange: 'left',
}, 'SidebarPanel');

const Sidebar = ({children}) => {
    return <SidebarPanel>{children}</SidebarPanel>;
};

Sidebar.propTypes = {
    children: PropTypes.any.isRequired,
};

export default Sidebar;
