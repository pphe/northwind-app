import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { NavigationBar, Home, Category, Order, Customer } from './components';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavigationBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/category" component={Category} />
                        <Route exact path="/order/:orderId([0-9]+)" component={Order} />
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/customer" component={Customer} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
