import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import AddWord from "./pages/AddWord";
import GetWord from "./pages/GetWord";
import Revision from "./pages/Revision";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/add" />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/get" element={<GetWord />} />
        <Route path="/revise" element={<Revision />} />
      </Routes>
    </>
  );
}

export default App;
