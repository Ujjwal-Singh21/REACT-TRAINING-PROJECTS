import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  Home from './components/pages/Home'
import  About from './components/pages/About'
import Contact from './components/pages/Contact'
import Navbar from './components/pages/Navbar'
import {BrowserRouter as Router, Route ,Switch } from "react-router-dom"
import Success from './components/pages/Success'
import AddUser from './components/Users/AddUser'
import EditUser from './components/Users/EditUser'
import NotFound from './components/pages/NotFound'
import ViewUser from './components/Users/ViewUser'



function App() {
  return (
    <Router>
    <div className="App">

      <Navbar />
      
      <Switch>
     
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" render={(props)=> <About {...props}  />  }/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/success" component={Success}/>
         <Route exact path="/user/add" component={AddUser}/>
         <Route exact path="/user/edit/:id" component={EditUser}/>
         <Route exact path="/user/view/:id" component={ViewUser}/>
         <Route component={NotFound}/>
        
     
      </Switch>
    
      
    </div>
    </Router>
  );
}

export default App;
