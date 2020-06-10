import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';

const articles = [
  {
    id: 1,
    title: 'Ewelina',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
  {
    id: 2,
    title: 'Ewelina śpi',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
  {
    id: 3,
    title: 'Karolina',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
  {
    id: 4,
    title: 'Ula',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
  {
    id: 5,
    title: 'Ewa',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
  {
    id: 6,
    title: 'Paulinka',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit tempore doloremque dolorem exercitationem, esse est vel dolores eius iusto inventore, reiciendis repellendus suscipit aperiam laboriosam, cumque rem ratione unde.',
    articleUrl: 'https://www.flickr.com/photos/kicart/',
    created: '1 day',
  },
];

const Articles = () => (
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

export default Articles;
