import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Link from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsl(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  position: relative;
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : 'white'};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
`;

const TwitterPicture = styled.img`
  width: 86px;
  height: 86px;
  border-radius: 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 1;
  border: 5px solid ${({ theme }) => theme.twitter};
`;

const MyLink = styled.a`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  background: white url(${Link});
  background-repeat: no-repeat;
  /* background-size: 60%; */
  background-position: 50%;
  cursor: pointer;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 5px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      {cardType === 'twitter' && (
        <TwitterPicture src="https://randomuser.me/api/portraits/lego/1.jpg" />
      )}
      {cardType === 'article' && (
        <MyLink target="_blank" href="https://www.flickr.com/photos/kicart/" />
      )}
      <StyledHeading>Siemka :)</StyledHeading>
      <DateInfo>Dziś jest 19 maja 2020 :)</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, deserunt odio
        voluptatibus animi esse, aperiam quae repudiandae veniam nisi magni enim beatae
        tenetur perspiciatis! Vel nulla totam animi libero! Fuga.
      </Paragraph>
      <Button secondary>Close</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;
