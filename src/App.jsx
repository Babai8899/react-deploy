import Navbar from "./shared/Navbar"
import Footer from "./shared/Footer"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import SidebarItems from "./shared/SidebarItems"
import { CircleCheckBig, ListTodo, CalendarCheck2, NotebookPen } from 'lucide-react'
import Home from "./module/Home"
import "./App.css"
// import Task from "./users/Task"
// import List from "./users/List"
// import Note from "./users/Note"
// import Event from "./users/Event"

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <SidebarItems/>
        <Routes>
          <Route path="/react-deploy" element={<Home />} />
          {/* <Route path="/task" element={<Task />} />
          <Route path="/list" element={<List />} />
          <Route path="/note" element={<Note />} />
          <Route path="/event" element={<Event />} /> */}
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
