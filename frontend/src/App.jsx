import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Profile from "./pages/Profile"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='sign-in' element={<SignIn />}></Route>
        <Route path='sign-up' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
