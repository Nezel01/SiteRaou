import { useState } from "react";
import "../styles.css";
//import image from "./test.jpg";

export default function Produit(props) {
  //state
  const [nombre, setNombre] = useState(0);
  const indexImg = props.indexImage;
  const Nom = props.nomProduit;
  let Somme = props.sum;
  const [litrage, setLitrage] = useState(props.Litrage);
  const [IndexlitrageActu, setIndex] = useState(0);
  const [prix, setPrix] = useState(litrage[0].prix);

  const fnActuSomme = props.fnSomme;
  //comportement

  const ActuPrix = (nouvIndex) => {
    const nouvPrix = litrage[nouvIndex].prix;
    setPrix(nouvPrix);
  };

  const Test = (nouvIndex) => {
    console.log(nouvIndex);
    ActuPrix(nouvIndex);

    setIndex(nouvIndex);
    //console.log(IndexlitrageActu);
  };

  const Incremente = () => {
    setNombre(nombre + 1);
    Somme += prix;
    fnActuSomme(Somme);

    //copy state
    let litrageCopy = [...litrage];
    //manip state
    litrageCopy[IndexlitrageActu].nombre++;
    // coller state
    setLitrage(litrageCopy);
    //console.log(IndexlitrageActu);
  };

  const Decremente = () => {
    if (nombre > 0 && litrage[IndexlitrageActu].nombre > 0) {
      setNombre(nombre - 1);
      Somme -= prix;
      fnActuSomme(Somme);

      //copy state
      let litrageCopy = [...litrage];
      //manip state
      litrageCopy[IndexlitrageActu].nombre--;
      // coller state
      setLitrage(litrageCopy);
      //console.log(IndexlitrageActu);
    }
  };
  //render
  return (
    <div className="divProduit">
      <div>
        <p>
          {Nom} ({litrage[IndexlitrageActu].litrage})
        </p>
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
      <div>
        {litrage.map((litreProduit) => (
          <button className="Btn" onClick={() => Test(litreProduit.index)}>
            {litreProduit.litrage} ({litreProduit.nombre})
          </button>
        ))}
      </div>
    </div>
  );
}
