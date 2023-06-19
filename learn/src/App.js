
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Learn from './container/Learn/Learn';
import Mid from './container/Mid/Mid';
// import Video from './container/Video/Video/Video';
import VideoMain from './container/Video/Video/VideoMain';
import Footer from './container/Footer/Footer';
import Dashboard from './container/Dashboard/Dashboard';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Mid/>
      <Learn/>
      <VideoMain/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
