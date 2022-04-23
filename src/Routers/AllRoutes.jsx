import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from '../Components/Login/Login'
import Main from '../Components/Main/Main'
import ListingCreate from '../Components/Page/ListingCreate'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listing/create' element={<ListingCreate />} />
    </Routes>
  )
}

export default AllRoutes