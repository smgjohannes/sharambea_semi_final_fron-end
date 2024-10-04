import React from 'react';
import {
  CardContainer,
  CardContent,
  CardDateIcon,
  CardMedia,
  CardMeta,
  CardMetaText,
  CardPrimaryTitle,
  CardSecondaryTitle,
  CardText,
  CardWrapper,
  CardImage,
  CardButton,
  CardCTA,
  CardHeading,
  CardLocation,
  CardLocationIcon,
} from './CardElements';

const Card = ({ id, link, img, primaryTitle, secondaryTitle, metaText, description, buttonText, ...props }) => {
  return (
    <CardContainer id={id} flexBasis={props.flexBasis}>
      {img && (
        <CardMedia href={link}>
          <CardImage src={img} className="lazyload" />
        </CardMedia>
      )}
      <CardContent>
        <CardWrapper>
          <CardHeading>
            {secondaryTitle && <CardSecondaryTitle>{secondaryTitle}</CardSecondaryTitle>}
            {primaryTitle && <CardPrimaryTitle>{primaryTitle}</CardPrimaryTitle>}
          </CardHeading>
          {metaText && (
            <CardMeta>
              <CardMetaText>
                <CardDateIcon />
                {metaText}
              </CardMetaText>
            </CardMeta>
          )}
          {description && <CardText>{description}</CardText>}
          {buttonText && (
            <CardCTA>
              <CardButton href={link} uppercase={true}>
                {buttonText}
              </CardButton>
              {props.location && (
                <>
                  <CardLocation>
                    <CardLocationIcon />
                    <p>{props.location}</p>
                  </CardLocation>
                </>
              )}
            </CardCTA>
          )}
        </CardWrapper>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
