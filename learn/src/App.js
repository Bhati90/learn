
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import Learn from './container/Learn/Learn';
import Mid from './container/Mid/Mid';
// import Video from './container/Video/Video/Video';
import VideoMain from './container/Video/Video/VideoMain';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <Mid/>
      <Learn/>
      <VideoMain/>
    </div>
  );
}

export default App;
