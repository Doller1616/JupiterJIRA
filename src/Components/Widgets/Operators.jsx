import React from 'react'
import PropTypes from 'prop-types';
const IF = ({children, condition}) => (condition ? children : null );
IF.propTypes = {
    condition : PropTypes.bool
}

export {
    IF
}
