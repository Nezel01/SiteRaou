import { useState } from "react";
import "../styles.css";
//import image from "./test.jpg";

export default function Produit(props) {
  //state
  const [nombre, setNombre] = useState(0);
  const prix = props.prix;
  const indexImg = props.indexImage;
  const Nom = props.nomProduit;
  let Somme = props.sum;
  const fnActuSomme = props.fnSomme;
  //comportement
  const Incremente = () => {
    setNombre(nombre + 1);
    Somme += prix;
    fnActuSomme(Somme);
  };

  const Decremente = () => {
    if (nombre > 0) {
      setNombre(nombre - 1);
      Somme -= prix;
      fnActuSomme(Somme);
    }
  };
  //render
  return (
    <div className="divProduit">
      <p>{Nom}</p>
      <img src={`/${indexImg}.jpg`} alt="" className="image" />
      <p>Prix = {prix} DZD</p>
      <button className="Btn" onClick={() => Decremente()}>
        -
      </button>
      <button className="Btn">{nombre}</button>
      <button className="Btn" onClick={() => Incremente()}>
        +
      </button>
    </div>
  );
}
