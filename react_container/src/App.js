import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Category from './components/Category';
import Order from './components/Order';
import Customer from './components/Customer';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <NavigationBar />
              <Route exact path="/category" component={Category} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/customer" component={Customer} />
         
              <Switch>
                <Route exact path="/" component={Home} />
                <Redirect to='/' />
              </Switch>

          </div>
        </BrowserRouter>
    );
  }
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }

//   componentDidMount() {
//     console.log('after mounting');
//   }

//   componentWillUnmount() {
//     console.log('before unmounting');
//   }
// }

export default App;

// general template for self-contained component
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

  // tick() { // this.setState((state, props) => {...});
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );


// handling events
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );
