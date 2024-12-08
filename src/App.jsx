import "./App.css"
import Navbar from "./shared/Navbar"
import Footer from "./shared/Footer"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import SidebarItems from "./shared/SidebarItems"
import Home from "./module/Home"
import LogIn from "./module/user/LogIn.jsx"
// import AddCustomer from "./module/customer/AddCustomer"
// import Read from "./module/customer/Read"
// import ChatBot from "./shared/ChatBot"
// import Task from "./users/Task"
// import List from "./users/List"
// import Note from "./users/Note"
// import Event from "./users/Event"

function App() {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  
  return (
    <>
      {/* <ChatBot/> */}
      <Router>
        <Navbar />
        <SidebarItems/>
        <Routes>
          {/* <Route path="/task" element={<Task />} />
          <Route path="/list" element={<List />} />
          <Route path="/note" element={<Note />} />
          <Route path="/event" element={<Event />} /> */}
          {isLoggedIn === 'true' ? <Route exact path='/react-deploy' element={<Home />} /> : <Route exact path='/react-deploy' element={<LogIn />} />}
          <Route exact path='/react-deploy' element={<Home />} />
          <Route exact path='/react-deploy/login' element={<LogIn />} />
          {/* <Route exact path='/register' element={<AddCustomer />} /> */}
          {/* <Route exact path='/customer/view' element={<Read />} /> */}
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
