
import { Routes, Route, Link, Router } from "react-router-dom";
import { Landing } from './pages/Landing/Landing';
import { Login } from "./pages/Login/Login";




function App() {

  return (
   <>
   <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/Login' element={<Login/>} />
   </Routes>
   </>
  )
}

export default App
