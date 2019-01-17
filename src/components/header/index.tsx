import React from 'react';
import { NavLink } from 'react-router-dom'; 

import './index.scss';

interface PropsType {};
interface StateType {};

export default class Header extends React.Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
    }

    render() {
        return (
            <header className="box-flex-space-between">
                <h1 className="title">Fizz</h1>
                <nav>
                    <NavLink to='/blog' activeClassName='active'>文章</NavLink>
                    <NavLink to='/category' activeClassName='active'>分类</NavLink>
                    <NavLink to='/about' activeClassName='active'>相关</NavLink>
                </nav>
            </header>
        )
    }
}