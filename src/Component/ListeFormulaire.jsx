import { useState } from "react";
import "../styles.css";
export default function Formulaires(props) {
  //state
  const [population, setPopulation] = useState("");
  const [depense, setDepense] = useState("");
  const [ROI, setROI] = useState([0, 0, 0]);

  const [numScenar, setNumScenar] = useState(15);

  const somme = props.Sum;

  const CalculeROI = (x) => {
    if (somme !== 0) {
      let pourcentage = x / 100;

      let y = population * pourcentage * depense;

      let value;
      let ROICopy = [0, 0, 0];
      let tab = [y * 22, y * 14, y * 8];
      for (let i in tab) {
        tab[i] *= 11;
        value = tab[i] - somme;
        console.log(value);

        value /= somme;
        value *= 100;
        ROICopy[i] = value;
      }
      setROI(ROICopy);
    } else {
      alert("Votre Total investment est a 0");
    }
  };

  const changementPourcentage = (x) => {
    CalculeROI(x);
    setNumScenar(x);
  };

  //comportement
  const SoumissionPopu = (event) => {
    event.preventDefault();
    //alert(population);
  };

  const handleChangePopu = (event) => {
    setPopulation(event.target.value);
  };

  const SoumissionDepense = (event) => {
    event.preventDefault();
    //

    alert(depense);
  };

  const handleChangeDepense = (event) => {
    setDepense(event.target.value);
  };

  ///render
  return (
    <div>
      <p>Entrez votre population :</p>
      <form action="submitPopu" onSubmit={SoumissionPopu}>
        <input
          value={population}
          type="text"
          placeholder="Entrez votre population"
          onChange={handleChangePopu}
        />
        <button>Ajouter</button>
      </form>
      <p>Entrez le prix moyen par personne et par jour :</p>
      <form action="submitEmplo" onSubmit={SoumissionDepense}>
        <input
          type="text"
          placeholder="Entrez le prix moyen par personne"
          onChange={handleChangeDepense}
        />
        <button>Ajouter</button>
      </form>
      <p className="Somme">({numScenar} %)</p>
      <div className="Somme">
        <button className="Btn" onClick={() => changementPourcentage(15)}>
          15% (pessimiste)
        </button>
        <button className="Btn" onClick={() => changementPourcentage(20)}>
          20% (moyen)
        </button>
        <button className="Btn" onClick={() => changementPourcentage(30)}>
          30% (optimiste)
        </button>
      </div>
      <h3 className="Somme">ROI (tout les jours) : {ROI[0]}%</h3>
      <h3 className="Somme">ROI (3X par semaine) : {ROI[1]}%</h3>
      <h3 className="Somme">ROI (2X par semaine) : {ROI[2]}%</h3>
    </div>
  );
}
