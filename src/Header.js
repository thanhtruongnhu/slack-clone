import React from 'react'
import './Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
const [{ user }] = useStateValue()

    return (
        <div className="header">
            <div className="header__left"> {/*Display block config: Avatar will stack above AccessTimeICon*/}
                {/*Avatar*/}
                <Avatar 
                className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                
                {/*Time icon*/}
                <AccessTimeIcon/>

            </div>
            <div className="header__search">
                {/*search icon*/}
                <SearchIcon />
                {/*input */}
                <input placeholder="Search"/>

            </div>
            <div className="header__right">
                {/*help icon*/}
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

export default Header
