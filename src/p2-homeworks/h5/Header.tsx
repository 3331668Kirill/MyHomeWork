import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    return (
        <div>
            <span className={s.navbar}>
            <NavLink to={PATH.PRE_JUNIOR}> [PRE JUNIOR] </NavLink>
            <NavLink to={PATH.JUNIOR}> [JUNIOR] </NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}> [JUNIOR PLUS] <input type={'checkbox'}/></NavLink>
            </span>
        </div>
    )
}

export default Header
