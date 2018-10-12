import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bsStyle="default">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Northwind</a>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav bsStyle="tabs">
                        <IndexLinkContainer to="/">
                            <NavItem>Home</NavItem>
                        </IndexLinkContainer>

                        <LinkContainer to="/order">
                            <NavItem>Orders</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/category">
                            <NavItem>Categories</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/customer">
                            <NavItem>Customers</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;
