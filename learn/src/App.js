
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Learn from './container/Learn/Learn';
import Mid from './container/Mid/Mid';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Mid/>
      <Learn/>
      <Footer/>
    </div>
  );
}

export default App;
