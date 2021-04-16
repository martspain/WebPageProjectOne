import React from 'react';
import Navbar from './Navbar';
import unrealIcon from '../assets/images/unrealIcon.png';

const PageHeader = () => (
  <div className="bg-img">
    <Navbar />
    <input className="unreal-icon" type="image" src={unrealIcon} alt="Unreal Engine" width="200" height="200" />
    <div className="container text-contain">
      <h1 className="title-text">Lorem ipsum</h1>
      <p className="subtitle-text">DOLOR SIT AMET</p>
      <p className="para-text">
        Consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div>
        <button type="button" className="custom-button-outline">LEARN MORE</button>
        <button type="button" className="custom-button">GET STARTED</button>
      </div>
    </div>
  </div>
);

export default PageHeader;
