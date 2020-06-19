import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import { Redirect } from 'react-router-dom';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import Link from 'assets/icons/link.svg';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

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
  border: 5px solid ${({ theme }) => theme.twitters};
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
  font-weight: ${({ theme }) => theme.light};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    this.handleCardClick = () => this.setState({ redirect: true });

    const {
      id,
      cardType,
      title,
      created,
      twitterName,
      articleUrl,
      content,
      removeItem,
    } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }

    return (
      <StyledWrapper onClick={this.handleCardClick}>
        <InnerWrapper activeColor={cardType}>
          {cardType === 'twitters' && (
            <TwitterPicture
              src={`https://randomuser.me/api/portraits/women/${twitterName}.jpg`}
            />
          )}
          {cardType === 'articles' && <MyLink target="_blank" href={articleUrl} />}
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button onClick={() => removeItem(cardType, id)} secondary>
            REMOVE
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

Card.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};

// nasza funkcja bedzie przyjmowac argument a oraz b i bedzie zwracac dispatch w którym zwracac bedzie zaimportowane removeItem, które przyjmuje dwa argumenty, itemType i ID

// removeItem stało się naszym propsem, który jest funkcją
// BUTTON! Poniewaz removeItem przyjmuje dwa argumenty, musimy uzyc funkcji strzałkowej, która zwraca nam dopiero nasza funkcję
const mapDispatchToProps = (dispatch) => ({
  removeItem: (itemType, id) => {
    console.log(`tutaj: ${itemType}`);
    dispatch(removeItemAction(itemType, id));
  },
});

export default connect(null, mapDispatchToProps)(Card);
