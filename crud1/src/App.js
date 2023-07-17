
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddData from './Components/AddData';
import Update from './Components/Update';
import Read from './Components/Read'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<AddData/>}/>
      <Route path="/read/:id" element={<Read/>}/>
      <Route path="/update/:id" element={<Update/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
