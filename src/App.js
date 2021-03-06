import { useState } from 'react';
import {
  BrowserRouter as Router,

  Route,
  Switch,
} from "react-router-dom";

import SignIn from './components/SignIn';
import { LoginContext } from './components/LoginContext'
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import Header from './components/Header';

import Footer from './components/Footer';
function App() {
  const [user, setUser] = useState(null)
  return (

    <>
      <LoginContext.Provider value={{ user, setUser }} >
        <Router>
          <Header />
          <Switch>
            <Route path="/post" component={Posts} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/" component={SignIn} />

          </Switch>
          <Footer />

        </Router>



      </LoginContext.Provider>

    </>
  );
}

export default App;
