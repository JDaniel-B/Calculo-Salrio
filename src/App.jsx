import { React } from "react";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Validating from "./pages/Validating";
import Salario from "./pages/Salario";

function App() {
  return (
    <main>
      <header>
        <nav>
          <ul>
            <NavLink className="text-xl" to={"/"}>
              Validacion
            </NavLink>
          </ul>
          <ul>
            <NavLink className="text-xl" to={"/Salario"}>
              Calculo Salarial
            </NavLink>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Validating />} />
        <Route path="/Salario" element={<Salario />} />
        <Route path="*" element={<Validating />} />
      </Routes>
    </main>
  );
}

export default App;
