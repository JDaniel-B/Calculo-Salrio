import { useState } from "react";

function Validating() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (e) => {
    setPassword(e.target.value);
    if (password.length === 5) {
      setMessage("Autorizado");
    } else {
      setMessage("No Autorizado");
    }
  };

  return (
    <div className="Validation">
      <form>
        
        <label className="text-3xl">Ingrese la clave de acceso</label>
        <input
          className="w-full p-2 border-solid border-2 border-sky-700"
          type="text"
          onChange={(e) => {
            validatePassword(e);
          }}
        />
        <div>{message}</div>
      </form>
    </div>
  );
}

export default Validating;
