import React from 'react';
import { connect } from 'react-redux';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';

const Twitters = ({ twitters }) => (
  <GridViewTemplate arrayLength={twitters.length} ewelina="twitters">
    {twitters.map(({ title, content, twitterName, created, id }) => (
      <Card
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridViewTemplate>
);

// deklarujemy funkcję mapStateToProps, która przyjmuje state i zwraca obiekt z propsem, który jest podawany do naszego komponentu.

// importujemy twitters z naszego STORE

const mapStateToProps = (state) => {
  const { twitters } = state;
  console.log(state);
  return { twitters };

  // jesli klucz i wartosc maja taka sama nazwe mozna skrócic jw return {twitters: twitters}
  // mozna równiez zdestrutyzowac i zapisać: const mapStateToProps = ({twitters}) => ({twitters});
};

// łączymy komponent twitters z naszym mapstateto props za pomoca connect

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Twitters);
