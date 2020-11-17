function log(nom = "", prenom = "Alan") {
    console.log(`${nom} ${prenom}`);
}

log("Martin", "Gérard"); // "Martin Gérard"
log(); // "Alan"
log("Martin"); // "Martin Alan"
log(undefined, "Gérard"); // "Gérard"
log(null, "Gérard"); // "null Gérard"
log("", "Gérard"); // "Gérard"
log("Turing", undefined); // "Turing Alan"
