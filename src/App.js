import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from './pages/About/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact   element={<Home/>} />
        <Route path='/about/:id' exact   element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
