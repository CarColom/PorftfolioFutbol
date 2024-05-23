import { Routes, Route } from 'react-router-dom';
import Landing from "./Pages/Landing/Landing"
import Home from "./Pages/Home"




function App() {
  return (
    <Routes>
   <Route path='/' element={<Landing/>} />
   <Route path='/home' element={<Home/>} />
 
   </Routes>
  );
}

export default App;
