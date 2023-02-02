import DetailScript from "@components/DetailScript";
import Home from "@pages/Home/Home";
import Login from "@pages/Login";
import RegisterForm from "@pages/RegisterForm";
import Scriptsubmit from "@pages/ScriptForm/ScriptSubmit";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dscript/:id" element={<DetailScript />} />
        <Route path="/submit" element={<Scriptsubmit />} />
      </Routes>
    </div>
  );
}

export default App;
