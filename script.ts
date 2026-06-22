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