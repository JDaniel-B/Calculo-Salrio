import { useState } from "react";

function Salario() {
  const [Salario, setSalario] = useState();
  const [Aumento, setAumento] = useState();
  const [Descuento, setDescuento] = useState();
  const [resultado, setResultado] = useState();

  const calculate = () => {
    const impuesto = 4.83 / 100;
    const salarioAumento = parseInt(Salario) + parseInt(Aumento);
    const salarioDescuento = salarioAumento - parseInt(Descuento);
    const salarioNeto = salarioDescuento * (1 - impuesto);

    setResultado(`Su salario Neto es de ${salarioNeto}`);
  };

  return (
    <div className="Validation">
      <form>
        <label className="text-xl">
          Ingresar el Salario
          <input
            type="text"
            className="w-full p-2 border-solid border-2 border-sky-700"
            onChange={(e) => {
              setSalario(e.target.value);
              calculate();
            }}
          />
        </label>
        <label className="text-xl">
          Ingresar el Aumento
          <input
            type="text"
            className="w-full p-2 border-solid border-2 border-sky-700"
            onChange={(e) => {
              setAumento(e.target.value);
              calculate();
            }}
          />
        </label>
        <label className="text-xl">
          Ingresar el Descuento
          <input
            type="text"
            className="w-full p-2 border-solid border-2 border-sky-700"
            onChange={(e) => {
              setDescuento(e.target.value);
              calculate();
            }}
          />
        </label>
        <p className="text-2xl">Descuento del IGGS del 4.83%</p>
        <div>{resultado}</div>
      </form>
    </div>
  );
}

export default Salario;
