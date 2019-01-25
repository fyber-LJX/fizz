import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'; 
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import './index.scss';

const headerConfig = [
    { to: '/blog', role: 3, title: '文章'},
    { to: '/category', role: 3, title: '分类'},
    { to: '/column', role: 3, title: '专栏'},
    { to: '/edit', role: 1, title: '编辑'},
    { to: '/about', role: 3, title: '相关'},
];
const source$ = from(headerConfig);
let Nav: any = [];
source$.pipe(
    filter(value => value.role === 3),
    map((value, index) => (<NavLink to={value.to} activeClassName='active' key={index}>{value.title}</NavLink>))
).subscribe(
    value => Nav.push(value),
    undefined,
    undefined
)

export default class Header extends React.Component {

    render() {
        return (
            <header className="box-flex-space-between">
                <h1 className="title">Fizz</h1>
                <nav>
                    { Nav.map((item: any) => item) }
                    <Redirect to='/home'></Redirect>
                </nav>
            </header>
        )
    }
}