
import { Routes, Route, Link, Router } from "react-router-dom";
import { Landing } from './pages/Landing/Landing';
import { Login } from "./pages/Login/Login";
import { About } from "./pages/About/About";
import { Contacts } from "./pages/Contacts/Contacts";




function App() {

  return (
   <>
   <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contacts' element={<Contacts/>} />
   </Routes>
   </>
  )
}

export default App
