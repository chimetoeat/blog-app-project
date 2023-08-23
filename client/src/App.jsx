import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Register";
import Login from "./Login";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}