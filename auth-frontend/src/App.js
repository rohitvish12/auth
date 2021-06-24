
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import Home from './component/auth/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/LogIn"><SignIn/></Route>
        <Route path="/SignUp" >
          <SignUp/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
