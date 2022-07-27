import './App.css';
import Navbar from './component/navbar';
import Slider from './component/slider'
import { Footer } from './component/Footer';
import {CARDS} from './component/footerCard';
import {TEXT} from './component/textBlock';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      <Navbar />
      <Slider/>
      <TEXT/>
      <CARDS/>
      <Footer/>
    </>
  );
}

export default App;
