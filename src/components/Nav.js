import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = ()=>(
    <div>
        <div>
            <NavLink exact to='/'>PageA</NavLink> |&nbsp;
            <NavLink to='/PageB'>PageB</NavLink>
        </div>
    </div>
)

export default Nav;
