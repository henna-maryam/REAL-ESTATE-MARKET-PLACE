 import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import CreateListing from "./pages/CreateListing"
import Header from "./components/Header"
import PrivateRoute from "./components/PrivateRoute"
import UpdateListing from "./pages/UpdateListing"
import  Listing  from "./pages/Listing"
import Search from "./pages/search"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
        <Route path='sign-up' element={<SignUp />}></Route>
        <Route path='create-listing' element={<CreateListing />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='/search'element={<Search/>} />   
        <Route path='/listing/:listingId' element={<Listing/>}></Route>
        <Route element={<PrivateRoute/>}>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create-listing' element={<CreateListing />}></Route>
        <Route path='/Update-listing/:listingId' element={<UpdateListing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
