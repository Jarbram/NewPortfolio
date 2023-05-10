import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import MusicPlayer from './pages/MusicPlayer/MusicPlayer';
import AboutPortfolio from './pages/AboutPortfolio/AboutPortfolio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact   element={<Home/>} />
        <Route path='/about/:id' exact   element={<About/>} />
        <Route path='/aboutPortfolio/:id' exact   element={<AboutPortfolio/>} />
        <Route path='/musicPlayer/:id' exact element={<MusicPlayer/>}/>
      </Routes>
    </Router>
  );
}

export default App;
