import React from "react";
import "./Header.css";
import ProfilePic from '../../assets/IMG_0925.JPG'

import Tippy from "@tippyjs/react";
import 'tippy.js/animations/scale-subtle.css';

import { Wrapper } from "../../components/Wrapper";


import { InstagramLogo, DropdownIcon, SearchIcon, HomeIcon, MessageIcon, NewPost, FindPeople, ActivityFeed, Following, Favourites } from "../../components/Icons/Index";

function Header() {
    return (
        <div className="container">
            <div className="logo">
                <div className="instaLogo">
                    {/* logo instagram */}
                    <a href="/">
                        <InstagramLogo />
                    </a>
                    
                </div>
                    {/* dropdown svg */}
                    <Tippy
                        content = {
                            <Wrapper>
                                <div className="dropdownTippy">
                                    <div className="followingIcon">
                                        <Following />
                                        <p>Following</p>
                                    </div>
                                    {/* <br/> */}
                                    <div className="favaouritesIcon">
                                        <Favourites />
                                        <p>Favourites</p>
                                    </div>
                                </div>
                             </Wrapper>
                        }
                        animation="fade"
                        arrow={true}
                        theme="light-border"
                        trigger="click"
                        interactive="true"
                        placement='bottom-end'
                        appendTo="parent"   
                    >
                        <div className="dropdownIcon">
                            <DropdownIcon />
                        </div>
                    </Tippy>
                    
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
                    <img alt="profile-pic" src={ProfilePic} className='profilePic'/>
                </div>
            </div>
        </div>
    );
}

export default Header;
