import React from 'react';
import GridViewTemplate from 'templates/GridViewTemplate';
import Card from 'components/molecules/Card/Card';

const note = [
  {
    id: 1,
    title: 'my note 1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non illo cumque dolorem earum perferendis nostrum, eaque molestias quae labore libero, voluptas commodi tempora cupiditate doloremque ut veritatis beatae autem.',
    created: '3 days',
  },
  {
    id: 2,
    title: 'my note 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non illo cumque dolorem earum perferendis nostrum, eaque molestias quae labore libero, voluptas commodi tempora cupiditate doloremque ut veritatis beatae autem.',
    created: '3 days',
  },
  {
    id: 3,
    title: 'my note 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non illo cumque dolorem earum perferendis nostrum, eaque molestias quae labore libero, voluptas commodi tempora cupiditate doloremque ut veritatis beatae autem.',
    created: '3 days',
  },
];

const Notes = () => (
  <GridViewTemplate arrayLength={note.length} ewelina="notes">
    {note.map(({ title, content, created, id }) => (
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

export default Notes;
