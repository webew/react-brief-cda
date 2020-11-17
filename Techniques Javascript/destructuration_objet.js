const personne = {
    nom: "Turing",
    prenom: "Alan",
    ville: "Berlin",
};

const log = ({ nom, prenom }) => {
    console.log(`${nom} ${prenom}`);
};

log(personne); //Turing Alan
