/**
 * GEARS.JS
 * ========
 * Configuration des 24 rouages HourTime.
 * 
 * Chaque rouage est un levier d'action spécifique associé à :
 * - Un mécanisme (comprendre, organiser, protéger, agir)
 * - Une description courte
 * - Une première action recommandée
 * - Les voleurs de temps qu'il combat
 * 
 * NOTA BENE : Les titres en MAJUSCULES sont des contenus provisoires.
 * Ils seront remplacés par les titres officiels HourTime dès réception.
 */

export const GEARS_CONFIG = {
  R01: {
    id: "R01",
    title: "ROUAGE PROVISOIRE : Observer ses priorités",
    mechanism: "comprendre",
    shortDescription: "Identifier clairement les trois priorités de la semaine.",
    action: "Lister les trois choses non-négociables pour cette semaine.",
    linkedThieves: ["priorites_floues", "mauvaise_estimation_durees"]
  },

  R02: {
    id: "R02",
    title: "ROUAGE PROVISOIRE : Faire le bilan quotidien",
    mechanism: "comprendre",
    shortDescription: "Revenir en fin de journée sur ce qui a été réalisé.",
    action: "Chaque soir, noter 3 choses accomplies et 1 apprentissage.",
    linkedThieves: ["absence_planification", "priorites_floues"]
  },

  R03: {
    id: "R03",
    title: "ROUAGE PROVISOIRE : Anticiper les risques",
    mechanism: "comprendre",
    shortDescription: "Identifier les imprévus possibles et créer du buffer.",
    action: "Ajouter 20% de temps buffer à votre planning chaque semaine.",
    linkedThieves: ["imprevu_non_anticipe"]
  },

  R04: {
    id: "R04",
    title: "ROUAGE PROVISOIRE : Identifier les fuites de temps",
    mechanism: "comprendre",
    shortDescription: "Reconnaître rapidement les activités qui volent du temps.",
    action: "Tracer les 3 principales activités parasites cette semaine.",
    linkedThieves: ["notifications", "interruptions"]
  },

  R05: {
    id: "R05",
    title: "ROUAGE PROVISOIRE : Planifier sa semaine",
    mechanism: "organiser",
    shortDescription: "Bloquer les tâches importantes avant que l'urgence ne s'installe.",
    action: "Chaque lundi, bloquer 30 min pour planifier la semaine complète.",
    linkedThieves: ["absence_planification", "priorites_floues"]
  },

  R06: {
    id: "R06",
    title: "ROUAGE PROVISOIRE : Terminer avant de commencer",
    mechanism: "organiser",
    shortDescription: "Finir une tâche avant de passer à la suivante.",
    action: "Cet semaine, terminer au moins 5 projets en attente.",
    linkedThieves: ["accumulation_taches_ouvertes", "multitache"]
  },

  R07: {
    id: "R07",
    title: "ROUAGE PROVISOIRE : Installer des routines",
    mechanism: "organiser",
    shortDescription: "Créer des séquences régulières qui structurent la journée.",
    action: "Mettre en place une routine du matin (30 min) cette semaine.",
    linkedThieves: ["manque_routines", "absence_planification"]
  },

  R08: {
    id: "R08",
    title: "ROUAGE PROVISOIRE : Mono-tâche avec intégrité",
    mechanism: "organiser",
    shortDescription: "Se concentrer complètement sur une seule chose.",
    action: "Bloquer 45 min de mono-tâche, tout le reste peut attendre.",
    linkedThieves: ["multitache", "accumulation_taches_ouvertes"]
  },

  R09: {
    id: "R09",
    title: "ROUAGE PROVISOIRE : Accepter le suffisamment bon",
    mechanism: "organiser",
    shortDescription: "Lâcher prise sur la perfection pour gagner du temps.",
    action: "Définir 'suffisamment bon' avant de commencer, puis vous y tenir.",
    linkedThieves: ["perfectionnisme"]
  },

  R10: {
    id: "R10",
    title: "ROUAGE PROVISOIRE : Dompter les notifications",
    mechanism: "protéger",
    shortDescription: "Reprendre le contrôle de vos alertes numériques.",
    action: "Désactiver 80% de vos notifications aujourd'hui.",
    linkedThieves: ["notifications", "utilisation_excessive_telephone"]
  },

  R11: {
    id: "R11",
    title: "ROUAGE PROVISOIRE : Apprendre à dire non",
    mechanism: "protéger",
    shortDescription: "Refuser poliment ce qui vous empêcherait de faire l'essentiel.",
    action: "Dire non à au moins une demande cette semaine.",
    linkedThieves: ["difficulte_dire_non", "sollicitations_autres"]
  },

  R12: {
    id: "R12",
    title: "ROUAGE PROVISOIRE : Créer des îlots de concentration",
    mechanism: "protéger",
    shortDescription: "Bloquer des créneaux sans réunion ni interruption.",
    action: "Bloquer 2h30 min cette semaine : porte fermée, téléphone éteint.",
    linkedThieves: ["interruptions", "notifications"]
  },

  R13: {
    id: "R13",
    title: "ROUAGE PROVISOIRE : Prioriser vous-même",
    mechanism: "protéger",
    shortDescription: "Placer vos besoins au même niveau que ceux des autres.",
    action: "Bloquer 1h cette semaine entièrement pour vous, sans justification.",
    linkedThieves: ["sollicitations_autres", "temps_sacrifie"]
  },

  R14: {
    id: "R14",
    title: "ROUAGE PROVISOIRE : Gérer les interruptions",
    mechanism: "protéger",
    shortDescription: "Accueillir les interruptions sans casser votre concentration.",
    action: "Pratiquer : 'Je reviens vers toi en fin de journée.'",
    linkedThieves: ["interruptions"]
  },

  R15: {
    id: "R15",
    title: "ROUAGE PROVISOIRE : Commencer malgré la peur",
    mechanism: "agir",
    shortDescription: "Passer à l'action même imparfaitement.",
    action: "Commencer votre tâche redoutée par 10 minutes, sans engagement.",
    linkedThieves: ["procrastination", "manque_routines"]
  },

  R16: {
    id: "R16",
    title: "ROUAGE PROVISOIRE : Cultiver votre énergie",
    mechanism: "agir",
    shortDescription: "Préserver et augmenter votre capital énergétique.",
    action: "Identifier votre pic d'énergie et y placer votre priorité absolue.",
    linkedThieves: ["manque_energie"]
  },

  R17: {
    id: "R17",
    title: "ROUAGE PROVISOIRE : Vider votre tête",
    mechanism: "agir",
    shortDescription: "Transformer la surcharge mentale en système de capture.",
    action: "Lister tous les projets/idées en attente dans un cahier.",
    linkedThieves: ["surcharge_mentale", "accumulation_taches_ouvertes"]
  },

  R18: {
    id: "R18",
    title: "ROUAGE PROVISOIRE : Se reposer activement",
    mechanism: "agir",
    shortDescription: "Prendre du vrai temps pour récupérer.",
    action: "Bloquer 1h30 cette semaine pour une activité sans culpabilité.",
    linkedThieves: ["manque_energie"]
  },

  R19: {
    id: "R19",
    title: "ROUAGE PROVISOIRE : Reclaimer votre vie personnelle",
    mechanism: "agir",
    shortDescription: "Créer une limite claire entre travail et vie personnelle.",
    action: "Définir une heure limite pour arrêter de travailler chaque jour.",
    linkedThieves: ["difficulte_dire_non", "temps_sacrifie"]
  },

  R20: {
    id: "R20",
    title: "ROUAGE PROVISOIRE : Être présent",
    mechanism: "agir",
    shortDescription: "Pratiquer la présence authentique sans rumination.",
    action: "Choisir une activité et la faire en pleine conscience cette semaine.",
    linkedThieves: ["surcharge_mentale", "utilisation_excessive_telephone"]
  },

  R21: {
    id: "R21",
    title: "ROUAGE PROVISOIRE : Reprendre le pouvoir",
    mechanism: "transversal",
    shortDescription: "Passer de la réactivité à la proactivité.",
    action: "Cette semaine, initier une action plutôt que réagir à une demande.",
    linkedThieves: ["temps_subi"]
  },

  R22: {
    id: "R22",
    title: "ROUAGE PROVISOIRE : Réduire les réunions inutiles",
    mechanism: "transversal",
    shortDescription: "Éliminer les réunions qui ne vous concernent pas.",
    action: "Refuser une réunion où vous ne n'apportez rien cette semaine.",
    linkedThieves: ["reunions_echanges_inutiles"]
  },

  R23: {
    id: "R23",
    title: "ROUAGE PROVISOIRE : Créer de l'espace pour vivre",
    mechanism: "transversal",
    shortDescription: "Laisser de la place dans votre agenda pour l'imprévu positif.",
    action: "Laisser 20% de votre temps libre chaque semaine.",
    linkedThieves: ["manque_energie"]
  },

  R24: {
    id: "R24",
    title: "Construire avec son temps",
    mechanism: "transversal",
    shortDescription: "Transformer votre relation au temps en création de vie.",
    action: "Réfléchir : comment voulez-vous que votre temps serve vos valeurs?",
    linkedThieves: []
  }
};

/**
 * Récupère un rouage par ID
 */
export function getGearById(gearId) {
  return GEARS_CONFIG[gearId];
}

/**
 * Retourne tous les rouages
 */
export function getAllGears() {
  return Object.values(GEARS_CONFIG);
}

/**
 * Retourne les rouages par mécanisme
 */
export function getGearsByMechanism(mechanism) {
  return Object.values(GEARS_CONFIG).filter(gear => gear.mechanism === mechanism);
}

/**
 * Récupère les informations détaillées des rouages par leurs IDs
 */
export function getGearsInfo(gearIds) {
  return gearIds.map(id => GEARS_CONFIG[id]).filter(Boolean);
}

/**
 * Utile pour afficher tous les rouages dans la documentation
 */
export function getGearsMappingByMechanism() {
  const mapping = {
    comprendre: [],
    organiser: [],
    protéger: [],
    agir: [],
    transversal: []
  };

  Object.values(GEARS_CONFIG).forEach(gear => {
    mapping[gear.mechanism].push(gear.id);
  });

  return mapping;
}
