import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Accueil' element={<Accueil/>} />
        <Route path='/Galerie' element={<Galerie/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
