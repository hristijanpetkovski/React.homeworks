import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Homework1 from './pages/homework1';
import Homework2 from './pages/homework2';
import Homework3 from './pages/homework3';

import './App.css';
import Homework4 from './pages/homewrok4';

function App() {
  return (
    <Router>
   <div className='Homepage'>
     <Nav />
     <Switch>
     <Route path="/homework1" component={Homework1}/>
     <Route path="/homework2" component={Homework2}/>
     <Route path="/homework3" component={Homework3}/>
     <Route path="/homework4" component={Homework4}/>
     </Switch>
     
   </div> 
     </Router>
  );
}


export default App;

