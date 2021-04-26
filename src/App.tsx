import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import {
  Menu,
  Logo,
} from './components';
import {
  MainPage,
  CocktailPage
} from './pages';

function App() {

  return (
    <Router>
      <header>
        <div className={'inner my-4 w-11/12 mx-auto my-0'}>
          <div className={'header relative flex flex-row flex-shrink items-center justify-between'}>
            <Link to={'/'} className={'logo'}>
              <Logo size={40} />
            </Link>
            <Menu />
          </div>
        </div>
      </header>
      <main>
        <div className={'inner w-11/12 mx-auto my-0'}>
          <Switch>
            <Route exact path={'/'}>
              <MainPage />
            </Route>
            <Route path={'/cocktail/:id'}>
              <CocktailPage />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
