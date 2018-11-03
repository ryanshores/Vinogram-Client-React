import React from 'react';

import { NavLink } from 'react-router-dom';

const navDrop = (props) => {
    return ( 
        <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.title} {props.icon}
            </NavLink>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="#">Action</NavLink>
                <NavLink className="dropdown-item" to="#">Another action</NavLink>
            </div>
        </li>
     );
}
 
export default navDrop;