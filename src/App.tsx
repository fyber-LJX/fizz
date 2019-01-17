import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Header from './components/header';
import Blog from './pages/blog/index';
import Home from './pages/home/index';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="fizz box-flex-column">
                    <Header></Header>
                    <Switch>
                        <Route exact={true} path='/' component={Home} />
                        <Route path='/home' compoment={Home} />
                        <Route path='/blog' component={Blog} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
