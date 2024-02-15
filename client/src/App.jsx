import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import { About,CreateListing,Home,Listing,Profile,Search,SignIn, SignUp, UpdateList } from './Pages'
import { Footer, Header, Profileroute } from './Components'



function App() {
  

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/listing/:listingId' element={<Listing/>}/>
        <Route element={<Profileroute/>}>
          <Route path='profile' element={<Profile/>}/>
          <Route path='create-listing' element={<CreateListing/>}/>
          <Route path = 'update-listing/:listingId' element ={<UpdateList/>}/>
         
        </Route>
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
