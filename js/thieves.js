/**
 * THIEVES.JS
 * ==========
 * Configuration des 17+ voleurs de temps du Diagnostic du Temps.
 * 
 * Chaque voleur inclut :
 * - ID unique
 * - Nom lisible
 * - Explication (description du phénomène)
 * - Signe observable (comment le reconnaître)
 * - Première action corrective (conseil immédiat)
 * - Rouages HourTime correspondants
 */

export const THIEVES_CONFIG = {
  notifications: {
    id: "notifications",
    name: "Les notifications",
    explanation: "Votre téléphone ou ordinateur vous interrumpt constamment avec des alertes, des messages, des appels. Chaque notification casse votre concentration et vous fait perdre du temps à reprendre votre fil.",
    observableSign: "Vous regardez votre téléphone toutes les 2-3 minutes. Vous êtes attiré par le bruit ou la vibration.",
    firstAction: "Désactiver les notifications de tous les réseaux sociaux pendant vos heures de travail.",
    linkedGears: ["R10", "R12"]
  },

  interruptions: {
    id: "interruptions",
    name: "Les interruptions",
    explanation: "Collègues, famille, appels non prévus : vous êtes dérangé régulièrement. Chaque interruption vous fait perdre le fil et vous impose un changement de contexte coûteux.",
    observableSign: "Vous êtes rarement seul plus de 30 minutes. On vous dérange fréquemment sans que ce soit programmé.",
    firstAction: "Créer un créneau de 2 heures sans interruption, porte fermée, téléphone silencieux.",
    linkedGears: ["R12", "R15"]
  },

  procrastination: {
    id: "procrastination",
    name: "La procrastination",
    explanation: "Vous reprenez toujours à plus tard les tâches importantes ou désagréables. Cette habitude accumule les choses inachevées et crée du stress à la dernière minute.",
    observableSign: "Vous travaillez beaucoup mieux sous pression. Les délais sont souvent très courts quand vous commencez vraiment.",
    firstAction: "Commencer la tâche redoutée par une durée de 10 minutes seulement, sans engagement d'aller plus loin.",
    linkedGears: ["R15", "R05"]
  },

  multitache: {
    id: "multitache",
    name: "Le multitâche",
    explanation: "Vous faites plusieurs choses en même temps : écouter en réunion et répondre à des emails, regarder un film et travailler. Votre cerveau passe d'une tâche à l'autre sans jamais être vraiment présent.",
    observableSign: "Vous avez du mal à terminer une seule chose. Vous sautez d'une application à l'autre.",
    firstAction: "Choisir une seule tâche pendant 45 minutes, tout le reste peut attendre.",
    linkedGears: ["R08", "R10", "R20"]
  },

  priorites_floues: {
    id: "priorites_floues",
    name: "Les priorités floues",
    explanation: "Vous ne savez pas vraiment ce qui est important pour vous à court terme. Vous réagissez aux demandes externes plutôt que de suivre une direction claire.",
    observableSign: "À la fin de la semaine, vous ne savez pas si vous avez avancé sur l'essentiel.",
    firstAction: "Écrire 3 choses non-négociables à faire avant le vendredi.",
    linkedGears: ["R01", "R02", "R05"]
  },

  perfectionnisme: {
    id: "perfectionnisme",
    name: "Le perfectionnisme",
    explanation: "Vous visez la perfection et vous relisez, retravailler, peaufinez à l'excès. Cet effort supplémentaire vous coûte beaucoup de temps pour peu de gain réel.",
    observableSign: "Vous avez du mal à lâcher prise sur un travail. Vous y revenez plusieurs fois pour l'améliorer.",
    firstAction: "Définir un critère de 'suffisamment bon' avant de commencer, puis vous y tenir.",
    linkedGears: ["R09", "R06", "R16"]
  },

  sollicitations_autres: {
    id: "sollicitations_autres",
    name: "Les sollicitations des autres",
    explanation: "Les gens vous sollicitent constamment pour de petites choses. Vous dites rarement non, alors votre agenda est saturé de demandes extérieures.",
    observableSign: "Votre semaine ressemble plus aux priorités des autres qu'à vos priorités.",
    firstAction: "Tester la phrase : 'Je peux revenir vers toi en fin de journée?' au lieu de répondre immédiatement.",
    linkedGears: ["R11", "R13", "R14"]
  },

  difficulte_dire_non: {
    id: "difficulte_dire_non",
    name: "La difficulté à dire non",
    explanation: "Vous avez du mal à refuser, vous craignez de décevoir ou de passer pour quelqu'un de pas collaboratif. Cette difficulté envahit votre temps.",
    observableSign: "Vous acceptez facilement les demandes même quand vous n'avez pas de temps.",
    firstAction: "Pratiquer des phrases : 'Non, c'est impossible cette semaine' ou 'Je dois d'abord terminer mon projet'.",
    linkedGears: ["R11", "R13", "R19"]
  },

  surcharge_mentale: {
    id: "surcharge_mentale",
    name: "La surcharge mentale",
    explanation: "Votre esprit est encombré par trop de choses à faire, trop d'idées, trop de décisions. Vous ruminez au lieu d'agir.",
    observableSign: "Vous avez du mal à vous endormir. Votre esprit tourne en permanence.",
    firstAction: "Vider votre tête dans un cahier : lister tous les projets, idées, décisions en attente.",
    linkedGears: ["R17", "R02", "R24"]
  },

  reunions_echanges_inutiles: {
    id: "reunions_echanges_inutiles",
    name: "Les réunions ou échanges inutiles",
    explanation: "Vous passez du temps en réunions qui ne vous concernent pas réellement ou qui auraient pu être un email. C'est du temps perdu.",
    observableSign: "Vous sortez de réunion en vous demandant pourquoi vous étiez là.",
    firstAction: "Avant d'accepter une réunion, demander : 'Est-ce que j'apporte quelque chose?' ou 'Puis-je avoir le compte-rendu?'",
    linkedGears: ["R22", "R12"]
  },

  mauvaise_estimation_durees: {
    id: "mauvaise_estimation_durees",
    name: "La mauvaise estimation des durées",
    explanation: "Vous sous-estimez constamment le temps que prennent vos tâches. Vous vous retrouvez en retard ou en débordement.",
    observableSign: "Vous finissez rarement à l'heure prévue. Vous dites 'ça va prendre 30 min' mais c'est 2 heures.",
    firstAction: "Noter le temps réel de vos tâches habituelles pendant une semaine pour calibrer vos estimations.",
    linkedGears: ["R01", "R04"]
  },

  absence_planification: {
    id: "absence_planification",
    name: "L'absence de planification",
    explanation: "Vous ne planifiez pas votre semaine ou vos journées. Vous vous lancez au jour le jour, réactif aux événements.",
    observableSign: "Vous découvrez souvent en fin de journée que vous n'avez pas fait ce qui était prévu.",
    firstAction: "Bloquer 30 minutes le dimanche soir ou le lundi matin pour planifier la semaine.",
    linkedGears: ["R05", "R07"]
  },

  manque_energie: {
    id: "manque_energie",
    name: "Le manque d'énergie",
    explanation: "Vous êtes fatigué, vous n'avez pas assez d'énergie pour avancer. Cela ralentit tout et vous laisse peu de marge pour l'imprévu.",
    observableSign: "Vous vous sentez épuisé même après avoir dormi. Vous traînez pour commencer une tâche.",
    firstAction: "Identifier votre moment de plus grande énergie dans la journée et y placer votre priorité absolue.",
    linkedGears: ["R16", "R18", "R20"]
  },

  accumulation_taches_ouvertes: {
    id: "accumulation_taches_ouvertes",
    name: "L'accumulation de tâches ouvertes",
    explanation: "Vous avez beaucoup de petites choses non terminées : projets commencés, emails en attente, documents à finir. Ça crée du bruit mental.",
    observableSign: "Vous avez l'impression d'avoir une montagne de choses à faire, mais rien n'est vraiment terminé.",
    firstAction: "Sélectionner 5 tâches inachevées et les terminer ou les annuler cette semaine.",
    linkedGears: ["R06", "R08", "R17"]
  },

  utilisation_excessive_telephone: {
    id: "utilisation_excessive_telephone",
    name: "L'utilisation excessive du téléphone",
    explanation: "Votre téléphone vous accapare : réseaux sociaux, actualités, jeux. C'est un voleur de temps particulièrement sournois.",
    observableSign: "Vous regardez votre téléphone plusieurs fois par heure, souvent sans vraie raison.",
    firstAction: "Utiliser les paramètres 'Temps d'écran' ou 'Digital Wellbeing' pour limiter les apps non essentielles.",
    linkedGears: ["R10", "R20"]
  },

  manque_routines: {
    id: "manque_routines",
    name: "Le manque de routines",
    explanation: "Sans routines, vous devez prendre la même décision chaque jour. C'est usant et source de procrastination.",
    observableSign: "Vous changez régulièrement votre approche. Aucun système stable ne s'est installé.",
    firstAction: "Mettre en place une routine du matin (30 min) : même heure, même séquence.",
    linkedGears: ["R07", "R15"]
  },

  imprevu_non_anticipe: {
    id: "imprevu_non_anticipe",
    name: "Les imprévus non anticipés",
    explanation: "Vous n'anticipez pas les risques ou les changements possibles. Les imprévus vous déstabilisent complètement.",
    observableSign: "Vous dites souvent : 'Je ne l'avais pas vu venir'. Les imprévus vous panique.",
    firstAction: "En planifiant votre semaine, ajouter 20% de buffer temporel pour l'imprévu.",
    linkedGears: ["R03", "R05", "R12"]
  }
};

/**
 * Récupère un voleur de temps par ID
 */
export function getThiefById(thiefId) {
  return THIEVES_CONFIG[thiefId];
}

/**
 * Retourne tous les voleurs de temps
 */
export function getAllThieves() {
  return Object.values(THIEVES_CONFIG);
}

/**
 * Retourne les IDs de tous les voleurs
 */
export function getAllThiefIds() {
  return Object.keys(THIEVES_CONFIG);
}

/**
 * Récupère les informations détaillées des voleurs par leurs IDs
 * Utile pour afficher dans les résultats
 */
export function getThievesInfo(thiefIds) {
  return thiefIds.map(id => THIEVES_CONFIG[id]).filter(Boolean);
}
