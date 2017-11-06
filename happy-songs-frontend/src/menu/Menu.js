import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
  Link
} from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';


var Menu = observer(class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    let favoritesRoute = '';
    if (this.props.userStore.user !== '')  {
      favoritesRoute =  <NavItem><Link className='nav-link' to='/favorites'>Favorites</Link></NavItem>;
    } 
    let personalization = '';
    if (this.props.userStore.user !== null) {
      personalization = this.props.userStore.user.user.firstName + "'s ";
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand ><Link to="/">{personalization}Happy Songs</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className='nav-link' to='/login'>Login</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/signup'>Sign Up</Link>
              </NavItem>
              <NavItem>
                <Link className='nav-link' to='/about'>About</Link>
              </NavItem>
              {favoritesRoute}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
})

export default withRouter(inject('userStore')(Menu));