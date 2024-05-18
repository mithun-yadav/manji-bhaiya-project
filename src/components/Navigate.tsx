import React from 'react';
import { Link } from 'react-router-dom';

function Navigate() {
    return (
        <div>
            <Link to="/">login</Link>
            <Link to="/products">About</Link>
        </div>
    )
}

export default Navigate
