import './App.css';
import {Navbar} from './Component/Navbar.js';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import {Footer} from './Component/Footer.js';
import {DocUpload} from './Component/DocUpload.js';
import {Mainpage} from './Component/Mainpage.js';
import {Joinus} from './Component/Joinus.js';
import {ContactUs} from './Component/ContactUs.js';
import logo from './assets/logo.png'
import { Marquee } from './Component/Marquee';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="main-contain">
        <img src={logo} alt="logo"/>
        <Navbar/>
      </div>
          <Switch>
            <Route path="/joinus" component={Joinus}/> 
            <Route path="/contactus" component={ContactUs}/>
            <Route path="/docupload" component={DocUpload}/>  
            <Route exact="/" component={Mainpage}/>
              <Mainpage/>
         </Switch> 
      </Router>
      <Marquee/>
      <Footer/>
    </div>
  );
}

export default App;
