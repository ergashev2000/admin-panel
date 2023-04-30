import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import {
    UserOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';

const index = () => {
    return (
        <div className="sidebar__wrapper">
            <div className="sidebar">
                <nav>
                    <ul className="nav__items">
                        <li className="nav__item">
                            <NavLink to="/admin" className="nav__item--link" activeClassName="active">
                                <UserOutlined />
                                Admins
                            </NavLink>
                        </li>
                        <li className="nav__item">
                            <NavLink to="/client" className="nav__item--link" activeClassName="active">
                                <UsergroupAddOutlined />
                                Clients
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default index;
