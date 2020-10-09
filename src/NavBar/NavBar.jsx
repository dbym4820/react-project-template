import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Router, Route, Redirect, Link} from 'react-router-dom';
import RouteOperator from '../RouteOperator';
import { Button } from 'reactstrap';
import createBrowserHistory from '../history';

export default class NavBar extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    isOpen: true,
	};
    }

    toggle() {
	this.isOpen = !this.isOpen;
    }

    goBack(){
	return (
	    <Redirect to={RouteOperator.urlRoute("/?theme=1&&user=aaa")} />
	);
    }
    
    render () {
	return (
	      <Navbar color="light" light expand="md">
		<NavbarBrand href={RouteOperator.urlRoute("")}>DeNoHypoReason</NavbarBrand>
	      </Navbar>
	);
    }
}

		// <NavItem>
		//   <Button onClick={ new Auth().signOutHandler } >Logout</Button>
		// </NavItem>		
