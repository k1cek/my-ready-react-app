import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';

const twitter = [
  {
    id: 1,
    title: 'Nina',
    content: 'Nice girl ;)',
    twitterName: '11',
    created: '3 days',
  },
  {
    id: 2,
    title: 'Crypto',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque itaque, laborum quae porro provident sequi, necessitatibus',
    twitterName: '12',
    created: '3 days',
  },
  {
    id: 3,
    title: 'janet',
    content: 'One of the react creator',
    twitterName: '4',
    created: '3 days',
  },
  {
    id: 4,
    title: 'Isabell',
    content: 'One girl',
    twitterName: '8',
    created: '13 days',
  },
];

const Twitters = () => (
  <GridViewTemplate arrayLength={twitter.length} ewelina="twitters">
    {twitter.map(({ title, content, twitterName, created, id }) => (
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

export default Twitters;
