import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Blog from './pages/blog/index';
import Home from './pages/home/index';


import logo from './logo.svg';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header box-flex">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Switch>
                    <Route  exact={true} path='/' component={Home} />
                    <Route
                    path='/home'
                    render = {
                        () => <Home />
                    }
                    />
                    <Route path='/blog'
                    render = {
                        () => <Blog />
                    } />
                </Switch>
            </div>
        );
    }
}

export default App;
