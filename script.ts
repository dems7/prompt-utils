const arr = value1?.body ?? [];

const personnes = arr.map((o) => ({
  pdopV:  o.partieLien?.numIdentificationPartie ?? null,  // colonne V
  nom:    o.partieLien?.partieIndividu?.nom ?? "",
  prenom: o.partieLien?.partieIndividu?.prenom ?? "",
  role:   o.codeRoleLienPartie ?? null
}));

const aAdminAda = arr.some((o) => o.codeRoleLienPartie === "ADMINISTRATEUR_ADA");

return {
  personnes,
  commentaireX: aAdminAda ? "" : "Ajouter via GDA le rôle ADMINISTRATEUR_ADA"  // colonne X
};




const pem = value1?.body ?? {};
const comptes = pem.comptesCompagnie ?? [];

const comptesCI = comptes.filter((c) => c.codeRelationCompte === "C" || c.codeRelationCompte === "I");
const comptesC  = comptes.filter((c) => c.codeRelationCompte === "C");

return {
  numerosAProteger: comptesCI.map((c) => c.numeroCompte),  // → body de R4 (comptes C ou I)
  comptesCI,                                               // → pour rattacher les jetons (colonne W)
  comptesC                                                 // → pour R5 extraction (comptes C)
};