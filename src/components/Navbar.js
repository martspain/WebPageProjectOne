/*
El dropdown interactivo (funciona a través de un hover) fue implementado en base al
codigo provisto por vosidiy en la siguiente link: https://bootstrap-menu.com/detail-basic-hover.html
*/

import React from 'react';
import epicLogo from '../assets/images/epicGamesLogo.png';
import searchIcon from '../assets/images/searchIcon.png';
import languageIcon from '../assets/images/globalIcon.png';
import loginIcon from '../assets/images/signInIcon.png';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="navbar-brand epic-logo" href="/UnrealEngine">
      <img src={epicLogo} width="30" height="35" alt="EpicLogo" />
    </div>
    <div className="collapse navbar-collapse">
      <div className="navbar-nav">
        <a className="nav-item nav-link active titulo" href="/UnrealEngine">UNREAL ENGINE</a>
        <a className="nav-item nav-link active subtitulo" href="/UnrealEngine">NEWS</a>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle subtitulo" href="/about" data-bs-toggle="dropdown">ABOUT</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/features">FEATURES</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/whatsnew">WHAT IS NEW</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/roadmap">ROADMAP</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/faq">FAQ</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle subtitulo" href="/industries" data-bs-toggle="dropdown">INDUSTRIES</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/games">GAMES</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/arquitecture">ARQUITECTURE</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/auto-trans">AUTOMOTIVE & TRANSPORTATION</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/broadcast">BROADCAST & LIVE EVENTS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/film-television">FILM & TELEVISION</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/training-simulation">TRAINING & SIMULATION</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/more-uses">MORE USES</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle subtitulo" href="learning" data-bs-toggle="dropdown">LEARNING & SUPPORT</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/get-started">GET STARTED</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/documentation">DOCUMENTATION</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/online-learning">ONLINE LEARNING</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/webinars">WEBINARS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/education">EDUCATION</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/support">SUPPORT</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/issues">ISSUES</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle subtitulo" href="community" data-bs-toggle="dropdown">COMMUNITY</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/forums">FORUMS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/answerhub">ANSWERHUB</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/megagrants">MEGAGRANTS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/user-groups">USER GROUPS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/events">EVENTS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/creators">CREATORS</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/intel-unreal">INTEL + UNREAL</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  dropdown-toggle subtitulo" href="market" data-bs-toggle="dropdown">MARKET PLACE</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/browse">BROWSE</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/submit-content">SUBMIT CONTENT</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/marketplace">MARKETPLACE KNOWLEDGE BASE</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/guidelines">MARKETPLACE GUIDELINES</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/market-forums">MARKETPLACE FORUMS</a></li>
          </ul>
        </li>
        <input type="image" className="search-icon" src={searchIcon} alt="Search" width="30" height="30" />
        <li className="nav-item dropdown">
          <input type="image" className="nav-link  dropdown-toggle global-icon" src={languageIcon} alt="Language" width="35" height="35" />
          <ul className="dropdown-menu">
            <li><a className="dropdown-item item-hover-dropdown" href="/lang=ja">Japanese</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/lang=co">Corean</a></li>
            <li><a className="dropdown-item item-hover-dropdown" href="/lang=ch">Chinese</a></li>
          </ul>
        </li>
        <input type="image" className="login-icon" src={loginIcon} alt="Login" width="30" height="30" />
        <a className="nav-item nav-link active subtitulo" href="/sign-in">SIGN-IN</a>
        <a className="nav-item nav-link active subtitulo download-button" href="/download">DOWNLOAD</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
