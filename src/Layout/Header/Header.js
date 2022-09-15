import React, { useState } from "react";
import "./Header.css";
import ProfilePic from '../../assets/44884218_345707102882519_2446069589734326272_n.jpeg'

import Tippy from "@tippyjs/react";
import 'tippy.js/animations/scale-subtle.css';

import { signOut } from 'firebase/auth'
import {auth} from '../../firebase'

import { Link, useNavigate } from 'react-router-dom'

import Popup from "reactjs-popup";

import { Wrapper } from "../../components/Wrapper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import { InstagramLogo, DropdownIcon, SearchIcon, HomeIcon, MessageIcon, NewPost, FindPeople, ActivityFeed, Following, Favourites, Media, ProfileIcon, SavedIcon, SettingsIcon, ThemeIcon, SwitchAccountIcon} from "../../components/Icons/Index";

function Header() {

    let naviagate = useNavigate()

    const [clickSearch, setClickSearch] = useState(false)

    const handleClickSearchBox = () =>
    {
        setClickSearch(true)
    }

    // const handleLogout = () =>
    // {
       
    //     // alert('123')
    // }

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
            {/* search */}
            <div className="search">
                {
                    clickSearch ? (
                        <div className="searchCombo">
                            <div className="searchBox">
                                <input type={'text'} placeholder={'Search'} className={'searchInput'} onClick={handleClickSearchBox}/>
                            </div>
                            <button className="clear_search">
                                <FontAwesomeIcon icon={faCircleXmark}/>
                            </button>
                        </div>
                    ) : (
                        <div className="searchCombo">
                            <div className="searchIcon">
                                <SearchIcon />
                            </div>
                            <div className="searchBox">
                                <input type={'text'} placeholder={'Search'} className={'searchInput'} />
                            </div>
                        </div>
                    )
                }
                
            </div>
            {/* navigation */}
            <div className="navigation">
                <div className="icon">
                    <a href="/"><HomeIcon /></a>
                </div>
                <div className="icon">
                    <MessageIcon />
                </div>
                <div className="icon">
                    <Popup
                        trigger={<button className="popup_btn"><NewPost /></button>}
                        modal
                        nested
                    >
                        {close => (
                            <div className="popup_modal">
                                <div className="popup_header"> Create new post </div>
                                <div className="popup_content">
                                    <div className="popup_mediaSVG">
                                        <Media />
                                    </div>
                                    <div className="popup_para">
                                        <p>Drag photos and videos here</p>
                                    </div>
                                    <div className="popup_selectFile">
                                        <input type={'button'} value='Select From Computer' className="popup_selectFile_btn" />
                                    </div>
                                </div>
                            </div>
                            
                        )}
                </Popup>
                    
                </div>
                <div className="icon">
                    <FindPeople />
                </div>
                <div className="icon">
                    <ActivityFeed />
                </div>
                <div className="profileIcon">
                    <Tippy
                        content = {
                            <Wrapper>
                                <div className="menu_container">
                                        <Link to={'/profile'} style={{textDecoration:"none", color:"#333"}}>
                                            <div className="menu_icon_profile">
                                                <ProfileIcon />
                                                <p className="menu_icon_p">Profile</p>
                                            </div>
                                        </Link>

                                    <div className="menu_icon">
                                        <SavedIcon />
                                        <p className="menu_icon_p">Saved</p>
                                    </div>

                                    <div className="menu_icon">
                                        <ThemeIcon />
                                        <p className="menu_icon_p">Switch Apprearance</p>
                                    </div>

                                    <div className="menu_icon">
                                        <SettingsIcon />
                                        <p className="menu_icon_p">Settings</p>
                                    </div>

                                    <div className="menu_icon">
                                        <SwitchAccountIcon />
                                        <p className="menu_icon_p">Switch Account</p>
                                    </div>

                                    <div 
                                        className="menu_logout" 
                                        onClick={() => 
                                            { 
                                                signOut(auth)
                                                    .then(() => { naviagate('/login') })}}
                                    >
                                        <p className="menu_logout_txt">Log out</p>
                                    </div>
                                </div>
                            </Wrapper>
                        }
                        // animation="fade"
                        arrow={true}
                        theme="light-border"
                        trigger="click"
                        interactive="true"
                        placement='bottom-end'
                        appendTo="parent"
                        >
                            <img alt="profile-pic" src={ProfilePic} className='profilePic'/>
                        </Tippy>
                </div>
            </div>
        </div>
    );
}

export default Header;
