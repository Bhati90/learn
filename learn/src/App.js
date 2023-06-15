
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Mid from './container/Mid/Mid';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Mid/>
    </div>
  );
}

export default App;
