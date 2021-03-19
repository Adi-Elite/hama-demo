import './App.css';
import {Navbar} from './Component/Navbar.js';
import {MemberSignIn} from './Component/MemberSignIn.js';
import {Footer} from './Component/Footer.js';
import {Blog} from './Component/Blog.js';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <div className="main-contain">
        <img src={logo} alt="logo"/>
        <Navbar/>
      </div>     
      <MemberSignIn/> 
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
