import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Add from './Addmore/Add'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      {/* <Add/> ////для доп.блока */}
    </div>
  );
}

export default App;
