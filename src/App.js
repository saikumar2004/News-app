import Everything from './components/everything';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Source from "./components/source"
import TopHead from './components/TopHead';


function App() {
  return(
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Everything/>}/>
      <Route path="/everything" element={<Everything/>} />
      <Route path="/topheadlines" element={<TopHead/>}/>
      <Route path="/source" element={<Source/>}/>

      
    </Routes>
    </BrowserRouter>

    

  )
}

export default App;