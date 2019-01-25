import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './stores/store';
import './styles/index.scss';

const Index = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Index />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
