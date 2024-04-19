import Navbar from "./Navbar"
import Home from "./Home"
import Markets from "./Markets"
import Error from "./Error"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Home" Component={Home}></Route>
          <Route path="/Markets" Component={Markets}></Route>
          <Route path="*" Component={Error}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
