import React from 'react';
import { Link } from 'react-router-dom';
import PageSidebar from 'templates/PageSidebar';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 50px 70px 50px 50px;
  width: 800px;
  text-align: justify;
`;

const TwitterPicture = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-repeat: no-repeat;
  position: absolute;
  right: 50px;
  top: 70px;
  z-index: 1;
`;

const LinkStyled = styled(Link)`
  color: black;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 40px;
  /* flex-grow: 1; */
  /* width: 130px; */
`;

const ButtonStyled = styled(Button)`
  background-color: ${({ activeColor, theme }) =>
    activeColor ? theme[activeColor] : theme.note};
`;

const DetalisTemplate = ({
  pageType,
  title,
  created,
  content,
  articleUrl,
  twitterName,
}) => (
  <StyledWrapper>
    <PageSidebar ewelina={pageType}>
      <h1>{title}</h1>
      <h3>{created}</h3>
      {pageType === 'twitters' && (
        <TwitterPicture
          alt={title}
          src={`https://randomuser.me/api/portraits/women/${twitterName}.jpg`}
        />
      )}
      <Paragraph>{content}</Paragraph>
      {pageType === 'articles' && <LinkStyled to={articleUrl}>open article</LinkStyled>}
      <Link to="/">
        <ButtonStyled activeColor={pageType}>go back</ButtonStyled>
      </Link>
    </PageSidebar>
  </StyledWrapper>
);

DetalisTemplate.propTypes = {
  pageType: PropTypes.string.isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterName: PropTypes.string,
};

DetalisTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterName: '',
};

export default DetalisTemplate;
