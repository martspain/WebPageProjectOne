import React from 'react';
import conOne from '../assets/images/con1.PNG';
import conTwo from '../assets/images/con2.PNG';
import conThree from '../assets/images/con3.PNG';
import conFour from '../assets/images/con4.PNG';

const PageBody = () => (
  <div className="container content-separation">
    <div className="row">
      <img className="col-6" src={conOne} alt="Img Uno" width="700" height="400" />
      <div className="container col-6 align-self-center">
        <h1 className="title-text">Lorem ipsum</h1>
        <p className="para-text">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button type="button" className="custom-button-outline">SEE ALL FEATURES</button>
      </div>
    </div>
    <div className="row content-separation">
      <div className="container col-6 align-self-center">
        <h1 className="title-text">A arcu cursus</h1>
        <p className="para-text">
          Vitae congue mauris rhoncus. Pulvinar elementum integer
          enim neque volutpat ac tincidunt vitae. Consectetur adipiscing elit ut
          aliquam purus.
        </p>
        <button type="button" className="custom-button-outline">START LEARNING</button>
      </div>
      <img className="col-6" src={conTwo} alt="Img Uno" width="700" height="400" />
    </div>
    <div className="row content-separation">
      <img className="col-6" src={conThree} alt="Img Uno" width="700" height="400" />
      <div className="container col-6 align-self-center">
        <h1 className="title-text">Eget duis at tellus</h1>
        <p className="para-text">
          At urna condimentum mattis. Vel orci porta non pulvinar.
          Vestibulum sed arcu non odio euismod lacinia at quis risus.
          Arcu risus quis varius quam quisque id diam vel quam. Vitae
          semper quis lectus nulla at volutpat diam ut venenatis.
        </p>
        <button type="button" className="custom-button-outline">SUPPORT & RESOURCES</button>
      </div>
    </div>
    <div className="row content-separation">
      <div className="container col-6 align-self-center">
        <h1 className="title-text">Posuere morbi leo</h1>
        <p className="para-text">
          Urna molestie. Vitae nunc sed velit dignissim sodales ut eu. Orci eu
          lobortis elementum nibh. Vitae auctor eu augue ut lectus arcu bibendum.
          Parturient montes nascetur ridiculus mus mauris vitae ultricies leo.
        </p>
        <button type="button" className="custom-button-outline">START LEARNING</button>
      </div>
      <img className="col-6" src={conFour} alt="Img Uno" width="700" height="400" />
    </div>
  </div>
);

export default PageBody;
