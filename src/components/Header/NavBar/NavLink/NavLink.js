import React from 'react';
import { NavLink } from 'react-router-dom'

const navLink = (props) => ( 
    <li className="nav-item">
        <NavLink onClick={props.onClick} exact className="nav-link" to={props.to || '/'}>{props.children}</NavLink>
    </li>
);
 
export default navLink;