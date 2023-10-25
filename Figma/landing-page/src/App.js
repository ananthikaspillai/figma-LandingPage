
import './App.css';
import Banner from './components/Banner/Banner';
import BannerSecond from './components/BannerSecond/BannerSecond';
import NavBar from './components/NavBar/NavBar';
import BannerThird from './components/BannerThird/BannerThird'
import { Badge } from 'react-bootstrap';
import BannerFourth from './components/BannerFourth/BannerFourth';
import BannerFifth from './components/BannerFifth/BannerFifth';
import Bottom1 from './components/Bottom1/Bottom1';
import Bottom2 from './components/Bottom2/Bottom2';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <BannerSecond/>
     <BannerThird/>
    <BannerFourth/>
    <BannerFifth/>
    <Bottom1/>
    <Bottom2/>
    <Footer/>
        </div>
  );
}

export default App;
