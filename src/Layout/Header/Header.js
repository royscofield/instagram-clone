import React from "react";
import "./Header.css";

import { InstagramLogo, DropdownIcon, SearchIcon, HomeIcon, MessageIcon, NewPost, FindPeople, ActivityFeed } from "../../components/Icons/Index";

function Header() {
    return (
        <div className="container">
            <div className="logo">
                <div className="instaLogo">
                    {/* logo instagram */}
                    <InstagramLogo />
                    
                </div>
                <div className="dropdownIcon">
                    {/* dropdown svg */}
                    <DropdownIcon />
                    
                </div>
            </div>
            <div className="search">
                <div className="searchCombo">
                    <div className="searchIcon">
                        <SearchIcon />
                    </div>
                    <div className="searchBox">
                        <input type={'text'} placeholder={'Search'} className={'searchInput'}/>
                    </div>
                </div>
            </div>
            <div className="navigation">
                <div className="icon">
                    <HomeIcon />
                </div>
                <div className="icon">
                    <MessageIcon />
                </div>
                <div className="icon">
                    <NewPost />
                </div>
                <div className="icon">
                    <FindPeople />
                </div>
                <div className="icon">
                    <ActivityFeed />
                </div>
                <div className="profileIcon">
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
