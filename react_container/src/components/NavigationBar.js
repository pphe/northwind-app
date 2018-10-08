import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Home from './Home';
import Order from './Order';
import Category from './Category';
import Customer from './Customer';
import { Redirect } from 'react-router-dom';

class NavigationBar extends React.Component {
    // is a constructor needed? or move up to App to track which..
    constructor(props) {
        super(props);
        this.state = { activeKey: 1 }
    }

    handleSelect(eventKey, event) {
        this.setState({ activeKey: eventKey });
        // event.preventDefault();
    }

    render() {
        return (
            <div>
                <Navbar bsStyle="default">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Northwind</a>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Nav bsStyle="tabs" activeKey="1" onSelect={key => this.handleSelect(key)}>
                        <NavItem eventKey={1}>Home</NavItem>
                        <NavItem eventKey={2}>Orders</NavItem>
                        <NavItem eventKey={3}>Categories</NavItem>
                        <NavItem eventKey={4}>Customers</NavItem>
                    </Nav>
                </Navbar>

                {this.state.activeKey === 1 ? <Home /> : null}
                {this.state.activeKey === 2 ? <Order /> : null}
                {this.state.activeKey === 3 ? <Redirect to='/category'></Redirect> : null}
                {/* {this.state.activeKey === 3 ? <Category /> : null} */}
                {this.state.activeKey === 4 ? <Customer /> : null}
            </div>

        );
    }
}

export default NavigationBar;
