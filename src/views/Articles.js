import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Articles = ({ articles }) => (
  <GridViewTemplate arrayLength={articles.length} ewelina="articles">
    {articles.map(({ title, content, articleUrl, created, id }) => (
      <Card
        cardType="articles"
        title={title}
        content={content}
        articleUrl={articleUrl}
        created={created}
        key={id}
        id={id}
      />
    ))}
  </GridViewTemplate>
);

const mapStateToProps = (state) => {
  const { articles } = state;
  return { articles };
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Articles);
