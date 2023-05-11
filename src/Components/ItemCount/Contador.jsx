import { useEffect, useRef, useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador < 0) {
    }
  }, [contador]);
  
  return (
    <div>
      <Titulo titulo={contador} />
      <button onClick={() => setContador(contador + 1)}>
        +
      </button>
      {/* <button onClick={onAdd}>Agregar al carrito de compras</button> */}
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
};

export default Contador;