import React from 'react'
import logo from '../images/logo.png'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import IconButton from '@mui/material/IconButton';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Header = props => {
  return (
    <div className="header">
        <div className="header__left">
            <img src={logo} alt="logo" />
            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search" />
            
            </div>



            

        </div>

        <div className="header__center">
            <div className="header__option">
            <HomeIcon fontSize='large' />
            </div>
            <div className="header__option">
            <FlagIcon fontSize='large' />
            </div>
            <div className="header__option">
            <SubscriptionsOutlined fontSize='large' />
            </div>
            <div className="header__option">
            <StorefrontOutlined fontSize='large' />
            </div>
            <div className="header__option">
            <SupervisedUserCircle fontSize='large' />
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar fontSize="large" />
                <h4>Bruce Willis</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
         
           
        </div>
    </div>
  )
}

export default Header