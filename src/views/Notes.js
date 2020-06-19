import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
  <GridViewTemplate arrayLength={notes.length} ewelina="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card
        cardType="notes"
        title={title}
        content={content}
        created={created}
        id={id}
        key={id}
      />
    ))}
  </GridViewTemplate>
);

const mapStateToProps = (state) => {
  const { notes } = state;
  return { notes };
};

// ALBO SZYBCIEJ PONIZEJ

// const mapStateToProps = ({ note }) => ({ note });

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Notes);
