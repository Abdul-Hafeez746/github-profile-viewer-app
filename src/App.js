import './App.css';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Routers from './Components/Routers';

function App() {
  //eslint-disable-next-line react-hooks/exhaustive-deps
  return (
  <div>
    <Navbar/>
    <Routers/>  
    <Footer/>

  </div>
  );
}

export default App;
