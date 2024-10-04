import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import logo from '../assets/images/logo.jpg';

export default function Meta(props) {
  let location = useLocation();
  let currentUrl = 'https://www.sharambeaprop.com' + location.pathname;
  let quote = props.quote !== undefined ? props.quote : '';
  let title = props.title !== undefined ? props.title : 'Sharambea';
  let image = props.image !== undefined ? props.image : logo;
  let description =
    props.description !== undefined
      ? props.description
      : 'Sharambea is a property sales agent based in Windhoek  Namibia';

  let hashtag =
    props.hashtag !== undefined ? props.hashtag : '#sharambeaprop.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='csrf_token' content='' />
      <meta property='type' content='website' />
      <meta property='url' content={currentUrl} />
      <meta name='_token' content='' />
      <meta property='title' content={title} />
      <meta property='quote' content={quote} />
      <meta name='description' content={description} />
      <meta property='image' content={image} />
      <meta property='og:locale' content='en_US' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:quote' content={quote} />
      <meta property='og:hashtag' content={hashtag} />
      <meta property='og:image' content={image} />
      <meta content='image/*' property='og:image:type' />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:site_name' content='Event Club' />
      <meta property='og:description' content={description} />
    </Helmet>
  );
}
