import "./App.css";
import Homepage from "./Pages/Homepage";
import {  BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
   // <Router>
    <div className="App">
    <Routes>
      {/* component */}
      <Route path="/" element={<Homepage ></Homepage>} exact />
      <Route path="/chats" element={<Chatpage></Chatpage>} />
      </Routes>
    </div>
   // </Router>
  );
}

export default App;