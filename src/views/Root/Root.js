import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Articles from 'views/Articles';
import Notes from 'views/Notes';
import Twitters from 'views/Twitters';
import DetalisPage from 'views/DetalisPage';
import { routes } from 'routes';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          {/* tworzymy osobną ścieżkę dla ścieżki domowej, która zamiast zwracać komponent, ma nam wyrenderować komponent Redirect, który zaprowadzi nas do Notes. Pozwala to również uzywac konkretnych adresów z ID strony np /article/jakistemat  */}
          <Route exact path={routes.notes} component={Notes} />

          <Route path={routes.note} component={DetalisPage} />
          {/* po slashu po notatkach moze sie pojawic cokolwiek, a w tym przypadku DetalisPAge */}
          <Route exact path={routes.twitters} component={Twitters} />
          <Route path={routes.twitter} component={DetalisPage} />

          <Route exact path={routes.articles} component={Articles} />
          <Route path={routes.article} component={DetalisPage} />
          <Route exact path={routes.login} component={Notes} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
