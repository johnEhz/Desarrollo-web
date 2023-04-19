import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [nombre, setNombre] = useState(props.nombre);
  const [product, setProduct] = useState("");

    useEffect(()=> {
        alert(`Producto cambio a: ${product}`)
    }, [product])

  return (
    <div className="counter">
      <h1>Hola {nombre}</h1>
      <button onClick={() => setNombre("Nuevo Nombre")}>Swap name</button>
      <h2>
        El valor actual es: <span>{count}</span>
      </h2>
      <ul>
        <li>
          <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </li>
        <li>
          <button onClick={() => setCount(count - 1)}>Decrementar</button>
        </li>
      </ul>
      <input type="text" onChange={(e) => setProduct(e.target.value)} />
      <h2>Producto: {product}</h2>
    </div>
  );
};

export default Counter;
