import "../styles.css";
import Produit from "./Produit";
export default function Capsule(props) {
  //state
  let somme = props.Somme;
  const ActuSomme = props.FnActu;
  const listeProduits = props.ListeProd.liste;
  const categorie = props.ListeProd.Categorie;
  //comportement
  //render
  return (
    <div className="divCapsule">
      <h2 className="txtCategorie">{categorie}</h2>
      <ul>
        {listeProduits.map((produit) => (
          <Produit
            prix={produit.prix}
            fnSomme={ActuSomme}
            nomProduit={produit.nomProduit}
            sum={somme}
            indexImage={produit.index}
          />
        ))}
      </ul>
    </div>
  );
}
