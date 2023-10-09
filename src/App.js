import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:petId" Component={PetDetail} />
      </Routes>
      {/* <Home />
      <PetList />
      <PetDetail /> */}
    </div>
  );
}

export default App;
