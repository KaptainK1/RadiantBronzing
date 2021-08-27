
import React from 'react';

import classes from './ErrorModalButton.module.css';

const ErrorModalButton = (props) => {
    return (
        <button
            className={classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default ErrorModalButton;