import Everything from './components/everything';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Source from "./components/source"
import TopHead from './components/TopHead';
import Contact from './components/Contact';

function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path="/News-app" element={<Everything/>}/>
      <Route path="/everything" element={<Everything/>} />
      <Route path="/topheadlines" element={<TopHead/>}/>
      <Route path="/source" element={<Source/>}/>
      <Route path="/contact" element={< Contact/>}/>
      
    </Routes>
    </BrowserRouter>

    

  )
}

export default App;