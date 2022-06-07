import './App.css';
import { Route, Routes } from 'react-router';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home';
import DogDetail from './components/DogDetail/DogDetail';
import Form from './components/Form/Form';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:id' element={<DogDetail/>}/>
        <Route path='/Create-Dog' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
