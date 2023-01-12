import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
   <a href='https://twitter.com/kgimase'>
    <div>
      <BsTwitter />
    </div>
    </a>
    <a href='https://github.com/JK11751'>
    <div>
      <FaGithub/>
    </div>
    </a>
    <a href='https://twitter.com/kgimase'>
    <div>
      <FaLinkedin />
    </div>
    </a>
  </div>
);

export default SocialMedia;
