import React from 'react';
import { Link } from 'react-router-dom';

const brand = (props) => (
    <Link className="navbar-brand" to={props.to || '/'}>
        {props.children}
    </Link>
);
 
export default brand;