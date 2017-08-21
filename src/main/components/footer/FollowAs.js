import React from 'react';

import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';

import './Footer.scss';

const FollowAs = () => (
  <div className="follow-as">
    <span className="follow-as__text">Follow as:</span>
    <div className="follow-as__icon-container">
      <div className="follow-as__icon" dangerouslySetInnerHTML={{ __html: facebook }} />
      <div className="follow-as__icon" dangerouslySetInnerHTML={{ __html: instagram }} />
      <div className="follow-as__icon" dangerouslySetInnerHTML={{ __html: twitter }} />
    </div>
  </div>
);

export default FollowAs;
