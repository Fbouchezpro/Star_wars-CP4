import Home from "@pages/Home/Home";
import Login from "@pages/Login";
import RegisterForm from "@pages/RegisterForm";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
