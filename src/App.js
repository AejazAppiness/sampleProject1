import logo from './logo.svg';
import './App.css';
import Customers from './components/Customers';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         simple react app
        </p>
      </header>
     <Switch>
       <Route exact path='/' render={() => <Redirect to="/customers"/>}/>
       <Route exact path='/customers' component={Customers}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
