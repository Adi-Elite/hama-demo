import './App.css';
import {Navbar} from './Component/Navbar.js';
import {MemberSignIn} from './Component/MemberSignIn.js';
import {Footer} from './Component/Footer.js';
import {DocUpload} from './Component/DocUpload.js';
import {Joinus} from './Component/Joinus.js';
import {Blog} from './Component/Blog.js';
import {ContactUs} from './Component/ContactUs.js';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <div className="main-contain">
        <img src={logo} alt="logo"/>
        <Navbar/>
      </div>     
      <MemberSignIn/>
      {/* <Joinus/> */}
      {/* <ContactUs/>  */}
      {/* <DocUpload/> */}
      <Blog/> 
      <Footer/>
    </div>
  );
}

export default App;
