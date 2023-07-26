import { useState } from "react";

export default function Produit(props) {
  //state
  const [nombre, setNombre] = useState(0);
  const prix = props.prix;
  //comportement
  const Incremente = () => {
    setNombre(nombre + 1);
  };

  const Decremente = () => {
    if (nombre > 0) {
      setNombre(nombre - 1);
    }
  };
  //render
  return (
    <div>
      <h3>Image</h3>
      <button>-</button>
      <button>0</button>
      <button>+</button>
    </div>
  );
}
