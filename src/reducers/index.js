const initialState = {
  twitters: [
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
  ],
  notes: [
    {
      id: 1,
      title: 'my note 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non illo cumque dolorem earum perferendis nostrum, eaque molestias quae labore libero, voluptas commodi tempora cupiditate doloremque ut veritatis beatae autem.',
      created: '2 days',
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
  ],
  articles: [
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
  ],
};

// wprowadzamy sobie poprzedni state, który mielismy. Wybieramy sobie za pomocą dynamicznego klucza [action.payload.itemType] te tablice którą chcemy modyfikować. Potem wchodzimy do tej konkretnej tablicy ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id gdzie filter zwraca nam nową tablice. np mówimy, state wez twitter i przefiltruj nam twitter pod kątem ID i porównaj czy któres ma to samo ID, które wywołujemy. Wyrzuc go i pozostaw wszystkie inne. taka odwrócoa logika.  nie usuwamy konkretnego elementu, ale zwracamy wszystkie elementy, które nie mają tego ID, które podalismy

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(
            (item) => item.id !== action.payload.id,
          ),
        ],
      };

    default:
      return state;
  }
};

export default rootReducer;
