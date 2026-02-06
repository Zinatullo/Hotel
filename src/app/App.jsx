import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from '../pages/Home'
import About from './../pages/About';
import Numbers from './../pages/Numbers';
import Services from '../pages/Services';
import Restoraunt from '../pages/Restoraunt';
import Galary from '../pages/Galary';
import Reviews from '../pages/Reviews';
import Contacts from '../pages/Contacts';
import Booking from '../shared/components/Home/Booking';

export default function App() {
  return (
    <Routes>
      <Route element ={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/numbers' element={<Numbers/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/restaurant' element={<Restoraunt/>}/>
      <Route path='/galary' element={<Galary/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='*'/>
      </Route>
    </Routes> 
  )
}
