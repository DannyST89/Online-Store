import { Routes, Route } from "react-router-dom";

import "./App.css";
import { HomeHeader } from "./components/homeHeader/HomeHeader";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./routes/home/Home";


function App() {
  return (
    <>
     <HomeHeader />
      <Navbar />     
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
