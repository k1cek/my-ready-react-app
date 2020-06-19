import React, { Component } from 'react';
import DetalisTemplate from 'templates/DetalisTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

class DetalisPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'notes',
    };
  }

  // bedziemy porowywac do poszczególnych routów
  // detailsPage rozpoznaje na jakiej sciezce jest i na tej podstawie wie jaki pagetype przekazac do template zeby ten mógł dostosowac wygląd co zawiera strona
  componentDidMount() {
    const { match } = this.props;
    switch (match.path) {
      case routes.twitter:
        this.setState({ pageType: 'twitters' });
        break;

      case routes.note:
        this.setState({ pageType: 'notes' });
        break;

      case routes.article:
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('Something went wrong with matching paths');
    }
  }

  render() {
    const dummyArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_world',
      articleUrl: 'https://youtube.com',
      created: '1 day',
    };

    const { pageType } = this.state;

    return (
      <DetalisTemplate
        pageType={pageType}
        title={dummyArticle.title}
        created={dummyArticle.created}
        content={dummyArticle.content}
        articleUrl={dummyArticle.articleUrl}
        twitterName={dummyArticle.twitterName}
      />
    );
  }
}

// const DetalisPage = ({ match }) => (
//   <DetalisTemplate>
//     {/* {console.log(match)}; */}
//     <p>{`is note: ${match.path === routes.note}`}</p>
//     <p>{`is twitter: ${match.path === routes.twitter}`}</p>
//     <p>{`is article: ${match.path === routes.article}`}</p>
//   </DetalisTemplate>
// );

DetalisPage.propTypes = {
  match: PropTypes.string.isRequired,
};
export default DetalisPage;
