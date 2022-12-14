import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Chef" />
    </div>
    <div className='app__wrapper_info'> 
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What we Believe in</h1>  

      <div className='app__chef_content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, rerum.</p>
        </div>
        <p className='p__opensans'>No risk No reward ! </p>
      </div>

      <div className="app__chef-sign">
        <p>Said Sikh</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>

  </div>
);

export default Chef;
