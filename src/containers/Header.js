import React, {Component, useState} from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {push} from "connected-react-router";
import NavLink from './NavLink';
import { selectRoot, logout } from "react-formio";
import {AuthConfig} from "../config";
import logo from "../assets/header/PepsiCo_Logo.png";

const Header = class extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  // TODO:: Need to figure out Redux with Brady for view
  changeView = () => {
    const [show, setShow] = useState(true);
    
    if (show) {
      return (
        <Alert 
          variant='success'
          dismissible
          onClose={() => setShow(false)}
        >
          View was changed to REDUX THING
        </Alert>
      )
    }
    
  }

  render() {
    const {auth, logout} = this.props;

    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/">
            <img className="navbar-brand" alt="PepsiCo" src={logo} height="100px" />
          </Link>

          <b className="navbar-brand" style={{fontSize: 45}}>WSP Experience Dashboard</b>
        
          
          <ul className="nav navbar-nav">
          <Button 
            variant="info"
            onClick={this.changeView}
          >
            View: redux thing
          </Button>
            { auth.authenticated ? (
              <li className="nav-item">
                <span className="nav-link" role="navigation link" onClick={logout}>
                  <span className="fa fa-sign-out" />&nbsp;
                  Logout
                </span>
              </li>
            ) : (
              <NavLink to="/auth" role="navigation link" className="nav-link">
                Login
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
      dispatch(push(AuthConfig.anonState));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
