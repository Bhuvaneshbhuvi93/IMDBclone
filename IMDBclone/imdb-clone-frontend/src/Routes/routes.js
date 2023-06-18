import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MovieList from '../components/MovieList';
import AddMovie from '../components/AddMovie';
import EditMovie from '../components/EditMovie';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={MovieList} />
      <Route path="/movies/add" component={AddMovie} />
      <Route path="/movies/edit/:id" component={EditMovie} />
    </Switch>
  );
};

export default Routes;
