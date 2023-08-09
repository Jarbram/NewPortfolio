import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';
import AboutPortfolio from './pages/AboutPortfolio/AboutPortfolio';
import Search from './pages/Search/Search';
import { MusicPlayerProvider } from './MusicPlayerContext';



function App() {
  return (
    <Router>
      <MusicPlayerProvider>
      <Routes>
        <Route path='/' exact   element={<Home/>} />
        <Route path='/about/:id' exact   element={<About/>} />
        <Route path='/aboutPortfolio/:id' exact   element={<AboutPortfolio/>} />
        <Route path='/search' exact element={<Search/>}/>
      </Routes>
      </MusicPlayerProvider>
    </Router>
  );
}

export default App;
