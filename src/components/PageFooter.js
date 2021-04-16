import React from 'react';
import twitter from '../assets/images/twitterIcon.png';
import facebook from '../assets/images/facebookIcon.png';
import twitch from '../assets/images/twitchIcon.png';
import instagram from '../assets/images/instagramIcon.png';
import youtube from '../assets/images/youtubeIcon.png';
import wifi from '../assets/images/wifiIcon.png';
import upArrow from '../assets/images/upArrowIcon.png';
import epicIcon from '../assets/images/epicGamesLogo.png';
import unrealIcon from '../assets/images/unrealIcon.png';

const PageFooter = () => (
  <div className="custom-footer">
    <div className="container">
      <div className="row content-separation">
        <div className="col-6 content-separation">
          <img className="icon-space-between" src={twitter} alt="Twitter" width="30" height="30" />
          <img className="icon-space-between" src={facebook} alt="Facebook" width="30" height="30" />
          <img className="icon-space-between" src={twitch} alt="Twitch" width="30" height="30" />
          <img className="icon-space-between" src={instagram} alt="Instagram" width="30" height="30" />
          <img className="icon-space-between" src={youtube} alt="Youtube" width="30" height="30" />
          <img className="icon-space-between" src={wifi} alt="Wifi" width="30" height="30" />
        </div>
        <div className="col-6 content-separation">
          <img className="icon-space-between up-arrow" src={upArrow} alt="Wifi" width="30" height="30" />
        </div>
      </div>
      <div className="row content-separation">
        <a className="col-2 subtitulo last-link" href="/features">Features</a>
        <a className="col-2 subtitulo last-link" href="/academic-features">Academic Partners</a>
        <a className="col-2 subtitulo last-link" href="/online-services">Online Services</a>
        <div className="col-2" />
        <div className="col-4">
          <button className="last-custom-button" type="button">SIGN UP FOR UNREAL ENGINE NEWS</button>
        </div>
      </div>
      <div className="row">
        <a className="col-2 subtitulo last-link get-up" href="/logo">Logo & Branding</a>
        <a className="col-2 subtitulo last-link get-up" href="/more-resources">More Resources</a>
        <a className="col-2 subtitulo last-link get-up" href="/training-partners">Training Partners</a>
        <div className="col-2" />
        <div className="col-4" />
      </div>
      <div className="row">
        <a className="col-2 subtitulo last-link get-up" href="/roadmap">Roadmap</a>
        <a className="col-2 subtitulo last-link get-up" href="/awards">Awards</a>
        <a className="col-2 subtitulo last-link get-up" href="/community-rules">Community Rules</a>
        <div className="col-2" />
        <div className="col-4" />
      </div>
      <div className="row">
        <a className="col-2 subtitulo last-link get-up" href="/education">Education</a>
        <a className="col-2 subtitulo last-link get-up" href="/license">Custom License Terms</a>
        <a className="col-2 subtitulo last-link get-up" href="/releasing-your-game">Releasing Your Game</a>
        <div className="col-2" />
        <div className="col-4" />
      </div>
    </div>
    <hr className="line-border" />
    <div className="container">
      <div className="row">
        <p className="col-6 subtitulo">
          © 2004-2021, Epic Games, Inc. All rights reserved. Unreal and its
          logo are Epic’s trademarks or registered trademarks in the US and elsewhere.
          {' '}
        </p>
      </div>
      <div className="row">
        <div className="col-1">
          <p className="subtitulo">Terms of Service</p>
        </div>
        <div className="col-1">
          <p className="subtitulo">Privacy Policy</p>
        </div>
        <div className="col-8" />
        <div className="col-1">
          <img src={epicIcon} alt="Epic Games" width="30" height="35" />
        </div>
        <div className="col-1">
          <img className="last-margin" src={unrealIcon} alt="Unreal Engine" width="35" height="35" />
        </div>
      </div>
    </div>
  </div>
);

export default PageFooter;
