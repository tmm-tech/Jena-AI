import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home Page/Home";
import LoginPage from "./Pages/Login Page/Login";
import Error404 from "./Pages/Error Page/404";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/404" element={<Error404/>} />
      </Routes>
    </div>
  );
}

export default App;
