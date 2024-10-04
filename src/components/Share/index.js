import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share';

import { ShareContainer } from './ShareElement';

const Share = (props) => {
  return (
    <ShareContainer>
      <EmailShareButton url={window.location.href} subject={props.title}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={window.location.href} title={props.title}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={window.location.href} title={props.title}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={window.location.href} title={props.title}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </ShareContainer>
  );
};

export default Share;
