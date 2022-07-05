import React from 'react';
import {  Link } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = ()=> {
    return (
        <nav className={s.nav}>  
        <div >
          <Link to="/profile" activeClassName={s.activeLink}>Profile</Link>
        </div>
        <div className ={s.item}>
          <Link to="/dialogs" activeClassName={s.activeLink}>Messages</Link> 
        </div>
        <div className ={s.item}>
          <Link to="/news" activeClassName={s.activeLink}>News</Link>
        </div>
        <div className ={s.item}>
          <Link to="/music" activeClassName={s.activeLink}>Music</Link>
        </div>
        <div className ={s.item}>
          <Link to="/settings" activeClassName={s.activeLink}>Settings</Link>
        </div>
        <div className ={s.item}>
          <Link to="/users" activeClassName={s.activeLink}>FIND Users</Link>
        </div>
      </nav>  
    )
}

export default Navbar;