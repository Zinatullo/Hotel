import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from '../pages/Home'
import About from './../pages/About';
import Numbers from './../pages/Numbers';

export default function App() {
  return (
    <Routes>
      <Route element ={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/numbers' element={<Numbers/>}/>
      <Route path='*'/>
      </Route>
    </Routes> 
  )
}
