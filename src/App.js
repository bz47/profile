import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Personal from "./components/Personal";
import Main from "./components/Main";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/Projects" element={<Projects />}></Route>
      <Route path="/Personal" element={<Personal />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="*" element={<NoMatch />}></Route>
    </Routes>
  );
}

export default App;
