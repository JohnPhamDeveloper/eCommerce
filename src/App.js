import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUpPage from './pages/signInSignUp/SignInSignUpPage.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const { setCurrentUser } = this.props;

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth?.();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signIn"
            render={() => {
              return this.props.currentUser ? <Redirect to="/" /> : <SignInSignUpPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
