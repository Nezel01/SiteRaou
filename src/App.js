import "./styles.css";
import Capsule from "./Component/CapsuleProduit";
import Formulaires from "./Component/ListeFormulaire";
import CapsuleProduitLitrage from "./Component/CapsuleProduitLitrage";
import { useState } from "react";

function App() {
  //state
  const [somme, setSomme] = useState(0);
  const [listeProduits, setProduit] = useState([
    {
      Categorie: "Employés",
      liste: [
        { prix: 35000, index: 3, nomProduit: "temps-plein" },
        { prix: 2000000, index: 3, nomProduit: "X" },
        { prix: 17500, index: 3, nomProduit: "mi-temps" }
      ]
    },
    {
      Categorie: "Joytopping",
      liste: [
        { prix: 1412, index: 51, nomProduit: "Caramel" },
        { prix: 1303, index: 52, nomProduit: "Amarena" },
        { prix: 1433, index: 53, nomProduit: "Framboise" },
        { prix: 1443, index: 54, nomProduit: "Fruit des bois" },
        { prix: 1970, index: 55, nomProduit: "Nocciolata premium" },
        { prix: 1535, index: 56, nomProduit: "Noisette" },
        { prix: 1368, index: 57, nomProduit: "Tropical" },
        { prix: 1490, index: 58, nomProduit: "Fraise" }
      ]
    },
    {
      Categorie: "Joycream",
      liste: [
        { prix: 2366, index: 13, nomProduit: "Amorenero (oréo)" },
        { prix: 2025, index: 15, nomProduit: "Carmel fleur de sel" },
        { prix: 3431, index: 14, nomProduit: "Besamemucho (férréro rocher)" },
        { prix: 2350, index: 15, nomProduit: "Caramel Biscotto (twix)" },
        { prix: 2090, index: 15, nomProduit: "Coconty (bounty)" },
        { prix: 2581, index: 15, nomProduit: "Croccantissimo (crunch)" },
        { prix: 1957, index: 15, nomProduit: "Donatello (raffaéllo)" },
        { prix: 3129, index: 15, nomProduit: "Fruits rouges" },
        {
          prix: 1864,
          index: 15,
          nomProduit: "Nocciolata bianca (buéno blanc)"
        },
        { prix: 2756, index: 15, nomProduit: "Nocciolina (snikers)" },
        { prix: 2392, index: 15, nomProduit: "Speculos (lotus)" },
        { prix: 2911, index: 15, nomProduit: "Wafernut clair (buéno)" },
        { prix: 2617, index: 15, nomProduit: "Wafernut noir (buéno noir)" },
        { prix: 2300, index: 15, nomProduit: "Chococream pistacchio" }
      ]
    },
    {
      Categorie: "Fruttidor (Coulis fruités)",
      liste: [
        { prix: 2392, index: 59, nomProduit: "Cerise" },
        { prix: 2548, index: 59, nomProduit: "Fraise 70%" },
        { prix: 3152, index: 59, nomProduit: "Framboise 70%" },
        { prix: 2646, index: 59, nomProduit: "Fruit des bois 70%" },
        { prix: 1782, index: 59, nomProduit: "Pomme" },
        { prix: 2553, index: 59, nomProduit: "Tropical (mangue, ananas" }
      ]
    },
    {
      Categorie: "Sirop (les 6 bouteilles)",
      liste: [
        { prix: 1440, index: 83, nomProduit: "Agrumes" },
        { prix: 1440, index: 32, nomProduit: "Fruit de la passion" },
        { prix: 1440, index: 84, nomProduit: "Menthe" },
        { prix: 1440, index: 84, nomProduit: "Menthe glaciale" },
        { prix: 1440, index: 86, nomProduit: "Citron" },
        { prix: 1440, index: 28, nomProduit: "Cassis" },
        { prix: 1440, index: 22, nomProduit: "Fraise" },
        { prix: 1440, index: 23, nomProduit: "Framboise" },
        { prix: 1440, index: 87, nomProduit: "Fruits tropicales" },
        { prix: 1440, index: 25, nomProduit: "Mangue" },
        { prix: 1440, index: 26, nomProduit: "Pêche" }
      ]
    },
    {
      Categorie: "Sirop maison",
      liste: [
        { prix: 900, index: 88, nomProduit: "Sucre blanc SKOR (10kg)" },
        { prix: 1500, index: 89, nomProduit: "Cacao de hollande (1kg)" },
        { prix: 1440, index: 90, nomProduit: "Cacao NOUARA (1.2kg)" },
        { prix: 6800, index: 91, nomProduit: "Fleur d'oranger (X12)" },
        {
          prix: 8000,
          index: 92,
          nomProduit: "Extrait de vanille SEBALCÉ (1L)"
        },
        {
          prix: 2160,
          index: 93,
          nomProduit: "Melasse de dattes HAMMADI (12X 350g)"
        }
      ]
    },
    {
      Categorie: "Thés et tisane",
      liste: [
        { prix: 3500, index: 94, nomProduit: "Thé vert FARDAOUS" },
        { prix: 12000, index: 95, nomProduit: "Thé vert ben achour (X40) " },
        { prix: 2600, index: 96, nomProduit: "Thé vitale tisane (X10)" }
      ]
    },
    {
      Categorie: "Purées de fruits surgellés (1kg)",
      liste: [
        { prix: 1550, index: 27, nomProduit: "Abricot" },
        { prix: 1802, index: 32, nomProduit: "Fruit de la passion" },
        { prix: 2550, index: 31, nomProduit: "Poire" },
        { prix: 3000, index: 20, nomProduit: "Coco" },
        { prix: 2600, index: 21, nomProduit: "Ananas" },
        { prix: 2750, index: 28, nomProduit: "Cassis" },
        { prix: 2650, index: 22, nomProduit: "Fraise" },
        { prix: 1800, index: 23, nomProduit: "Framboise" },
        { prix: 1800, index: 29, nomProduit: "Fruits exotiques" },
        { prix: 2600, index: 24, nomProduit: "Griottes" },
        { prix: 2801, index: 25, nomProduit: "Mangue" },
        { prix: 1450, index: 26, nomProduit: "Pêche" },
        { prix: 2850, index: 30, nomProduit: "Fruits des bois" }
      ]
    },
    {
      Categorie: "Goblets",
      liste: [
        { prix: 1500, index: 75, nomProduit: "Carton S (900 pièces)" },
        { prix: 3200, index: 76, nomProduit: "Carton M (900 pièces)" },
        { prix: 4200, index: 77, nomProduit: "Carton L (900 pièces)" },
        { prix: 2800, index: 81, nomProduit: "Couvercles (900 pièces)" },
        { prix: 38900, index: 78, nomProduit: "Plastique S (500 pièces)" },
        { prix: 25000, index: 79, nomProduit: "Plastique M (500 pièces)" },
        { prix: 2500, index: 80, nomProduit: "Plastique L (500 pièces)" }
      ]
    },
    {
      Categorie: "Glaçons",
      liste: [{ prix: 19800, index: 82, nomProduit: "Glaçons (pour 1 an) " }]
    },
    {
      Categorie: "Materiel informatique",
      liste: [
        { prix: 86000, index: 41, nomProduit: "Caisse tactile smartpos" },
        {
          prix: 19800,
          index: 42,
          nomProduit: "Imprimante ticket de caisse gest line"
        },
        { prix: 13500, index: 43, nomProduit: "Tiroir caisse smart-pos eco" },
        { prix: 23900, index: 44, nomProduit: "Imprimante fujitsu" },
        { prix: 108000, index: 45, nomProduit: "PC allinone bst ts-201" },
        {
          prix: 23900,
          index: 46,
          nomProduit: "Imprimante thermique star micronics"
        },
        { prix: 25000, index: 47, nomProduit: "Imprimante ticket smart pos" },
        { prix: 25000, index: 48, nomProduit: "Imprimante CB smart pos" },
        { prix: 35900, index: 49, nomProduit: "Logiciel gpos restauration" },
        { prix: 250, index: 50, nomProduit: "Rouleau ticket thermique (50R)" }
      ]
    },
    {
      Categorie: "Materiel pour café",
      liste: [
        { prix: 10000, index: 60, nomProduit: "V60 Coffee Scale" },
        { prix: 8000, index: 61, nomProduit: "Brewista Espresso Scale" },
        {
          prix: 14000,
          index: 62,
          nomProduit: "Barista Set (tamp, milk pitcher,thermometer)"
        },
        { prix: 4000, index: 63, nomProduit: "Small milk pitcher" },
        { prix: 5000, index: 64, nomProduit: "Toddy Essential Cold Brewer" },
        { prix: 2000, index: 65, nomProduit: "Toddy Paper Filters x 20" },
        { prix: 45000, index: 66, nomProduit: "Moccamaster" },
        { prix: 30000, index: 67, nomProduit: "Wilfa FILTER grinder" }
      ]
    },
    {
      Categorie: "Autre matériel",
      liste: [
        { prix: 3300, index: 69, nomProduit: "Bouilloire CONDOR" },
        { prix: 15300, index: 70, nomProduit: "Micro-onde CONDOR" },
        { prix: 54600, index: 71, nomProduit: "Gongelateur 250 L CONDOR" },
        { prix: 38900, index: 72, nomProduit: "Gongelateur 150L CONDOR" },
        { prix: 25000, index: 73, nomProduit: "COMAF Blender" },
        { prix: 2500, index: 74, nomProduit: "Bac a condiments" },
        { prix: 130000, index: 68, nomProduit: "Refrigirateur" },
        { prix: 228000, index: 97, nomProduit: " Présentoir avec faience" },
        { prix: 218000, index: 98, nomProduit: "Présentoir sans faience" }
      ]
    }
  ]);

  const [listeProdLitrage, setListeLitrage] = useState([
    {
      Categorie: "Jus",
      liste: [
        {
          index: 7,
          nomProduit: "Mojito ( Citron menthe)",
          Litrage: [
            { litrage: "250ml", prix: 130, index: 0, nombre: 0 },
            { litrage: "1L", prix: 400, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 10,
          nomProduit: "Fraise citron methe",
          Litrage: [
            { litrage: "250ml", prix: 130, index: 0, nombre: 0 },
            { litrage: "1L", prix: 400, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 5,
          nomProduit: "Citron",
          Litrage: [
            { litrage: "250ml", prix: 130, index: 0, nombre: 0 },
            { litrage: "1L", prix: 400, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 8,
          nomProduit: "Fraise",
          Litrage: [
            { litrage: "250ml", prix: 130, index: 0, nombre: 0 },
            { litrage: "1L", prix: 400, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 9,
          nomProduit: "Fraise Banane",
          Litrage: [
            { litrage: "250ml", prix: 140, index: 0, nombre: 0 },
            { litrage: "1L", prix: 450, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2250, index: 2, nombre: 0 }
          ]
        },
        {
          index: 6,
          nomProduit: "Fraise Orange",
          Litrage: [
            { litrage: "250ml", prix: 140, index: 0, nombre: 0 },
            { litrage: "1L", prix: 450, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2250, index: 2, nombre: 0 }
          ]
        },
        {
          index: 4,
          nomProduit: "Orange",
          Litrage: [
            { litrage: "250ml", prix: 140, index: 0, nombre: 0 },
            { litrage: "1L", prix: 500, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 11,
          nomProduit: "Poire banane",
          Litrage: [
            { litrage: "250ml", prix: 150, index: 0, nombre: 0 },
            { litrage: "1L", prix: 550, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2750, index: 2, nombre: 0 }
          ]
        },
        {
          index: 12,
          nomProduit: "Fruits rouges",
          Litrage: [
            { litrage: "250ml", prix: 150, index: 0, nombre: 0 },
            { litrage: "1L", prix: 550, index: 1, nombre: 0 },
            { litrage: "5L", prix: 2750, index: 2, nombre: 0 }
          ]
        }
      ]
    },
    {
      Categorie: "Chococherry (sucrés)",
      liste: [
        {
          index: 37,
          nomProduit: "Cupcakes",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 37,
          nomProduit: "Mini cupcakes",
          Litrage: [
            { litrage: "X10", prix: 1125, index: 0, nombre: 0 },
            { litrage: "X100", prix: 11250, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 112500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 16,
          nomProduit: "Cheesecakes",
          Litrage: [
            { litrage: "X10", prix: 2250, index: 0, nombre: 0 },
            { litrage: "X100", prix: 22500, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 225000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 18,
          nomProduit: "brownie aux noix",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 18,
          nomProduit: "brownies mms/oreo",
          Litrage: [
            { litrage: "X10", prix: 2625, index: 0, nombre: 0 },
            { litrage: "X100", prix: 26250, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 262500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 33,
          nomProduit: "donuts et beignets",
          Litrage: [
            { litrage: "X10", prix: 1500, index: 0, nombre: 0 },
            { litrage: "X100", prix: 15000, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 150000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 34,
          nomProduit: "donuts fourées",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 19,
          nomProduit: "cookie ",
          Litrage: [
            { litrage: "X10", prix: 1125, index: 0, nombre: 0 },
            { litrage: "X100", prix: 11250, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 112500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 38,
          nomProduit: "fondant au nutella",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 17,
          nomProduit: "roulé a la fraise et pate d'amande",
          Litrage: [
            { litrage: "X10", prix: 2250, index: 0, nombre: 0 },
            { litrage: "X100", prix: 22500, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 225000, index: 2, nombre: 0 }
          ]
        },
        {
          index: 39,
          nomProduit: "roulé chocolat, noisette ",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 35,
          nomProduit: "tartellettes ",
          Litrage: [
            { litrage: "X10", prix: 1125, index: 0, nombre: 0 },
            { litrage: "X100", prix: 11250, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 112500, index: 2, nombre: 0 }
          ]
        },
        {
          index: 36,
          nomProduit: "cinnamon rolls",
          Litrage: [
            { litrage: "X10", prix: 1875, index: 0, nombre: 0 },
            { litrage: "X100", prix: 18750, index: 1, nombre: 0 },
            { litrage: "X1000", prix: 187500, index: 2, nombre: 0 }
          ]
        }
      ]
    },
    {
      Categorie: "Coulis Sweelty",
      liste: [
        {
          index: 40,
          nomProduit: "Caramel beurre salés",
          Litrage: [
            { litrage: "220g", prix: 280, index: 0, nombre: 0 },
            { litrage: "410g", prix: 470, index: 1, nombre: 0 },
            { litrage: "2kg", prix: 2200, index: 2, nombre: 0 },
            { litrage: "6kg", prix: 2400, index: 3, nombre: 0 }
          ]
        }
      ]
    }
  ]);

  //Comportement

  const ActuSomme = (nouvSomme) => {
    setSomme(nouvSomme);
  };

  //Render
  return (
    <div>
      <h1 className="txt-Bienvenu">Salutations jeune entrepreneur</h1>
      <ul>
        {listeProduits.map((CategoProduit) => (
          <Capsule Somme={somme} FnActu={ActuSomme} ListeProd={CategoProduit} />
        ))}
      </ul>
      <ul>
        {listeProdLitrage.map((CategoProduitLitrage) => (
          <CapsuleProduitLitrage
            Somme={somme}
            FnActu={ActuSomme}
            ListeProd={CategoProduitLitrage}
          />
        ))}
      </ul>

      <h3 className="Somme">Total investment (1 year) = {somme} DZD</h3>
      <Formulaires Sum={somme} />
    </div>
  );
}

export default App;
