import Header from './componenets/Header/Header';
import CardList from './componenets/CardList/CardList';
import SignIn from './componenets/SignIn/SignIn';
import SignUp from './componenets/SignUp/SignUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }

  componentWillUnmount() {  
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Header currentUser={currentUser}/>
          <Switch>
            <Route exact path="/">
              <div className="container">
                <CardList className="item"/>
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
}

export default App;
