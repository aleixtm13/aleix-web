import './App.css';
import { Route, Routes } from 'react-router';
import About from "./pages/about";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path="/about" element= {<About />}>Sobre</Route>
      </Routes>
    </div>
  );
}

export default App;
