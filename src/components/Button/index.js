import React from 'react';
import PropTypes from 'prop-types';
import {jsx} from '../../nano';

const ButtonBase = jsx('button', {
    d: 'inline-flex',
    h: '40px',
    td: 'none',
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    fz: '14px',
    ff: 'Ubuntu,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Cantarell,"Open Sans","Helvetica Neue",sans-serif',
    fw: 400,
    textTransform: 'uppercase',
    letterSpacing: '0.14px',
    lh: '24px',
    trs: 'background .2s, box-shadow .2s, color .2s',
    mar: 0,
    bdrad: '3px',
    bd: 0,
    pad: '0px 15px',
    minWidth: '50px',
    cur: 'pointer',
    '&:hover': {
        bg: '#444',
        col: '#fff',
        boxShadow: `0 0 0 3px rgba(0, 0, 0, .03)`,
    },
    '&.color:hover': {
        boxShadow: 'none',
        'svg,svg path': {
            fill: '#fff',
        },
    },
    '&:disabled': {
        boxShadow: 'none',
    },
}, 'ButtonBase');

const Button = ({block, primary, ...rest}) => {
    let css = {};

    if (primary) {
        css.bg = '#07f';
        css.col = '#fff';
    }

    if (block) {
        css.w = '100%';
    }

    return <ButtonBase css={css} {...rest} />
};

Button.propTypes = {
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    primary: PropTypes.bool,
};

Button.defaultProps = {
    block: false,
    primary: false,
    disabled: false,
};

export default Button;
