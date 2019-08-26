import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage';
import OffersPage from './components/OffersPage';
import Header from './components/Header';
import AddOpitonsPage from './components/AddOptions';
import AddOfferPage from './components/AddOfferPage';
import EditOfferPage from './components/EditOfferPage';

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/add-options' component={AddOpitonsPage}/>
          <Route path='/offers' exact component={OffersPage} />
          <Route path='/add-offer' exact component={AddOfferPage}/>
          <Route path='/edit-offer/:id' exact component={EditOfferPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
