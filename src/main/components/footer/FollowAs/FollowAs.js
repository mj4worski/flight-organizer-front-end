import React from 'react';

import {
  Facebook,
  Instagram,
  Twitter,
} from './icons';

import './FollowAs.scss';

const FollowAs = () => (
  <div className="follow-as">
    <span className="follow-as__text">Follow as:</span>
    <div className="follow-as__icon-container">
      <span className="follow-as__icon" dangerouslySetInnerHTML={{ __html: Facebook }} />
      <span className="follow-as__icon" dangerouslySetInnerHTML={{ __html: Instagram }} />
      <span className="follow-as__icon" dangerouslySetInnerHTML={{ __html: Twitter }} />
    </div>
  </div>
);

export default FollowAs;
