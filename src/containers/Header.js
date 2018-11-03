// Module imports
import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Dispatch imports
import { logout } from '../store/actions/auth';

// Component imports 
import Brand from '../components/Header/Brand/Brand';
import ToggleButton from '../components/Header/ToggleButton/ToggleButton';
import NavBar from '../components/Header/NavBar/NavBar';

const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <Brand><FontAwesomeIcon icon={['fas', 'wine-glass-alt']} /> Vinogram</Brand>
        <ToggleButton />
        <NavBar currentUser={props.currentUser} logout={props.logout}/>
    </nav>
);

const mapStateToProps = state => ({
    currentUser: state.currentUser
});
 
export default connect(mapStateToProps, { logout })(Header);