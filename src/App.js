import React from 'react';
import { BrowserRouter as Router,Switch,NavLink,Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
import Insert from './component/insert.js';
import View from './component/view.js';
import Edit from './component/edit.js';

function App() {
  return (
     <Router>
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg boxShadow">
      <a className="navbar-brand" style={{fontSize:'30px'}} href="/">REACT CRUD</a>
      <NavLink className="navItem" exact activeStyle={{color:'#000000f2'}} activeClassName="selected" to={'/'}>Insert</NavLink>
      <NavLink className="navItem" exact activeStyle={{color:'#000000f2'}} activeClassName="selected" to={'/view'}>View</NavLink> 
    </nav>
    {/* <button type="button" className="btn btn-primary">Primary</button> */}
    <Switch>
      <Route exact path="/" component={Insert} />
      <Route   path="/edit/:id" component={Edit}/>
      <Route   path="/view" component={View}/>
    </Switch>
    </Router>
     
  );
}

export default App;
