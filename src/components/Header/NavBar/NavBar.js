import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NavLink from './NavLink/NavLink';

const navBar = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
                props.currentUser.isAuthenticated ? (
                    <ul className="navbar-nav ml-auto">
                        <NavLink to={`/add`}><FontAwesomeIcon icon={['fas','plus']} /><FontAwesomeIcon icon={['fas', 'wine-glass-alt']} /></NavLink>
                        <NavLink to={`/${props.currentUser.user.username}`}><FontAwesomeIcon icon={['fas','user']} /></NavLink>
                        <NavLink onClick={props.logout}>Signout</NavLink>
                    </ul>
                ) : (
                    <ul className="navbar-nav ml-auto">
                        <NavLink to='/signin'>Signin</NavLink>
                        <NavLink to='/signup'>Signup</NavLink>
                    </ul>
                )
            }
        </div>
    )
};
 
export default navBar;