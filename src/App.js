import './App.css';
import { Route, Routes } from 'react-router';
import About from "./pages/about";
import Navbar from './components/Navbar/Navbar';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path="/about" element= {<About />}>Sobre</Route>
        <Route path="/contact" element= {<Contact />}>Contacte</Route>
      </Routes>
    </div>
  );
}

export default App;
