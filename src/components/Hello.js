import React from 'react';

const Hello = () => {
    return React.createElement(
        'div',
        {id: 'test', className: "test"},
        React.createElement('h1', null, 'Hello Pranita')
    )

}

export default Hello