import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <IconButton>
             <MenuIcon />
          </IconButton>
          <img 
          src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="" />
        </div>

        <div className="header__middle">
            <SearchIcon />
            <input placeholder="Search mail" type='text'/>
            <ArrowDropDownIcon className="header__inputCaret"/>

        </div>

        <div className="header__right">
           <IconButton>
               <AppsIcon />
           </IconButton>

           <IconButton>
               <NotificationsIcon />
           </IconButton>
           <Avatar />
        </div>
      
    </div>
  );
}

export default Header;
