
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {

  return (
      <BrowserRouter basename="/weading">
          <Routes>
              <Route path="/" element={<Home/>} />
              {/* Add more routes here */}
          </Routes>
      </BrowserRouter>
  )
}

export default App
