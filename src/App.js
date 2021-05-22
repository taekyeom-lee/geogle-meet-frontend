import Header from './componenets/Header/Header';
import CardList from './componenets/CardList/CardList';
import SignIn from './componenets/SignIn/SignIn';
import SignUp from './componenets/SignUp/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { tutor } from './tutor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <CardList className="item" tutor={tutor}/>
            </div>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>              
          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>              
      </div>
    </BrowserRouter>
    
  );
}

export default App;
