/**
 * RECOMMENDATIONS.JS
 * ==================
 * Bibliothèque d'actions personnalisées pour le plan sur 7 jours.
 * 
 * Chaque action est liée à :
 * - Un profil temporel
 * - Un ou plusieurs mécanismes
 * - Un voleur de temps spécifique
 * - Une journée du plan
 * 
 * Le moteur d'assemblage combine ces actions pour créer un plan
 * cohérent et progressif sans redondance.
 */

export const ACTION_LIBRARY = {
  // ==============================================
  // JOUR 1 : OBSERVER SANS JUGER
  // ==============================================
  day1_observe_interruptions: {
    day: 1,
    title: "Observer les interruptions",
    intention: "Prendre conscience du rythme réel de votre journée.",
    action: "Noter pendant une journée complète : chaque fois que vous êtes interrompu, quand et par quoi.",
    reflection: "À quel moment de la journée êtes-vous le plus dérangé? Qui ou quoi interrompt le plus?",
    linkedThieves: ["interruptions"],
    linkedProfiles: ["temps_subi", "temps_disperse"]
  },

  day1_observe_priorities: {
    day: 1,
    title: "Observer vos priorités réelles",
    intention: "Comprendre le décalage entre ce que vous pensiez faire et ce que vous avez fait.",
    action: "Lister ce que vous aviez prévu de faire cette semaine et ce que vous avez vraiment fait.",
    reflection: "Qu'est-ce qui vous a empêché de faire ce que vous aviez prévu?",
    linkedThieves: ["priorites_floues", "absence_planification"],
    linkedProfiles: ["temps_subi", "temps_disperse"]
  },

  day1_observe_notifications: {
    day: 1,
    title: "Observer vos notifications",
    intention: "Prendre conscience de l'intensité des alertes numériques.",
    action: "Compter combien de notifications vous recevez en une journée de travail.",
    reflection: "Combien de ces notifications sont vraiment utiles?",
    linkedThieves: ["notifications"],
    linkedProfiles: ["temps_disperse"]
  },

  day1_observe_energy: {
    day: 1,
    title: "Observer votre énergie",
    intention: "Identifier votre courbe naturelle d'énergie.",
    action: "Noter votre niveau d'énergie toutes les 2 heures pendant 3 jours.",
    reflection: "À quelle heure êtes-vous le plus énergique? Le moins énergique?",
    linkedThieves: ["manque_energie"],
    linkedProfiles: ["temps_controle", "temps_sacrifie"]
  },

  day1_observe_time_theft: {
    day: 1,
    title: "Observer les voleurs de temps",
    intention: "Identifier vos principales fuites de temps.",
    action: "Pendant 3 jours, noter chaque activité non-productive de plus de 10 minutes.",
    reflection: "Quels sont vos trois principaux voleurs de temps cette semaine?",
    linkedThieves: ["utilisation_excessive_telephone"],
    linkedProfiles: ["temps_disperse", "temps_subi"]
  },

  // ==============================================
  // JOUR 2 : CLARIFIER VOTRE DIRECTION
  // ==============================================
  day2_identify_priorities: {
    day: 2,
    title: "Identifier vos trois priorités",
    intention: "Définir clairement ce qui compte vraiment.",
    action: "Écrire les trois choses non-négociables pour cette semaine (travail et vie personnelle).",
    reflection: "Comment ces trois priorités s'alignent-elles avec votre vision de vie?",
    linkedThieves: ["priorites_floues"],
    linkedProfiles: ["temps_subi", "temps_disperse"]
  },

  day2_assess_said_no: {
    day: 2,
    title: "Clarifier vos limites",
    intention: "Prendre conscience des demandes que vous acceptez facilement.",
    action: "Lister les 5 dernières demandes qu'on vous a faites. Lesquelles auriez-vous pu refuser?",
    reflection: "Pourquoi dites-vous oui quand vous voudriez dire non?",
    linkedThieves: ["difficulte_dire_non", "sollicitations_autres"],
    linkedProfiles: ["temps_sacrifie"]
  },

  day2_clarify_perfectionism: {
    day: 2,
    title: "Redéfinir 'suffisamment bon'",
    intention: "Lâcher prise sur la perfection.",
    action: "Choisir une tâche habituelle. Définir avant de commencer ce qu'est 'suffisamment bon'.",
    reflection: "Qu'est-ce que vous gagneriez à lâcher 10% de perfection?",
    linkedThieves: ["perfectionnisme"],
    linkedProfiles: ["temps_controle"]
  },

  day2_map_energy_zones: {
    day: 2,
    title: "Mapper votre semaine par énergie",
    intention: "Aligner vos tâches importantes avec votre énergie.",
    action: "Reporter vos trois priorités aux moments où vous avez le plus d'énergie.",
    reflection: "Qu'est-ce qui change si vous travaillez avec votre énergie au lieu de la combattre?",
    linkedThieves: ["manque_energie"],
    linkedProfiles: ["temps_sacrifie", "temps_controle"]
  },

  // ==============================================
  // JOUR 3 : SUPPRIMER OU RÉDUIRE
  // ==============================================
  day3_kill_notifications: {
    day: 3,
    title: "Désactiver les notifications",
    intention: "Reprendre le contrôle de votre attention.",
    action: "Désactiver 80% de vos notifications (réseaux sociaux, emails, news). Garder urgent + personnel.",
    reflection: "Vous sens-vous plus calme? Avez-vous vraiment raté quelque chose?",
    linkedThieves: ["notifications"],
    linkedProfiles: ["temps_disperse"]
  },

  day3_cancel_unproductive: {
    day: 3,
    title: "Annuler les tâches non-essentielles",
    intention: "Créer de la place pour l'important.",
    action: "Identifier 3 tâches que vous aviez prévu mais qui ne sont pas vraiment essentielles. Les annuler.",
    reflection: "Que se passe-t-il si vous ne les faites pas?",
    linkedThieves: ["accumulation_taches_ouvertes"],
    linkedProfiles: ["temps_disperse"]
  },

  day3_reduce_meetings: {
    day: 3,
    title: "Réduire les réunions inutiles",
    intention: "Récupérer du temps de concentration.",
    action: "Identifier une réunion récurrente qui ne vous concernait pas. La refuser cette semaine.",
    reflection: "Combien d'heures par mois pourriez-vous récupérer?",
    linkedThieves: ["reunions_echanges_inutiles"],
    linkedProfiles: ["temps_subi"]
  },

  day3_clean_tasks: {
    day: 3,
    title: "Nettoyer votre liste de tâches",
    intention: "Transformer la surcharge mentale en clarté.",
    action: "Vider tous les éléments en attente : terminer, déléguer ou annuler 5 petites choses.",
    reflection: "Combien de choses aviez-vous gardées 'juste au cas où'?",
    linkedThieves: ["surcharge_mentale", "accumulation_taches_ouvertes"],
    linkedProfiles: ["temps_disperse"]
  },

  // ==============================================
  // JOUR 4 : ORGANISER VOTRE SEMAINE
  // ==============================================
  day4_weekly_planning: {
    day: 4,
    title: "Planifier votre semaine",
    intention: "Transformer vos priorités en plan concret.",
    action: "Bloquer les trois priorités dans votre agenda. Ajouter 20% de buffer pour l'imprévu.",
    reflection: "Voyez-vous comment vous allez avancer sur vos priorités?",
    linkedThieves: ["absence_planification", "imprevu_non_anticipe"],
    linkedProfiles: ["temps_subi", "temps_disperse"]
  },

  day4_create_routine_morning: {
    day: 4,
    title: "Installer une routine du matin",
    intention: "Commencer votre journée avec intention.",
    action: "Créer une séquence de 30 min le matin (ex: 10 min préparation, 10 min priorités, 10 min respiration).",
    reflection: "Comment vous sentez-vous quand vous commencez avec intention?",
    linkedThieves: ["manque_routines", "absence_planification"],
    linkedProfiles: ["temps_subi"]
  },

  day4_schedule_focus_blocks: {
    day: 4,
    title: "Bloquer des créneaux de concentration",
    intention: "Protéger le temps pour les tâches importantes.",
    action: "Cette semaine, bloquer 3 créneaux de 2 heures minimum sans réunion ni interruption.",
    reflection: "Qu'est-ce que vous pourriez accomplir avec 6 heures ininterrompues?",
    linkedThieves: ["interruptions", "multitache"],
    linkedProfiles: ["temps_disperse"]
  },

  day4_batch_similar_tasks: {
    day: 4,
    title: "Grouper les tâches similaires",
    intention: "Minimiser les changements de contexte.",
    action: "Identifier vos tâches récurrentes et les grouper par type (emails, calls, création, admin).",
    reflection: "Combien de contextes différents change votre cerveau par jour?",
    linkedThieves: ["multitache"],
    linkedProfiles: ["temps_disperse"]
  },

  // ==============================================
  // JOUR 5 : PROTÉGER VOTRE TEMPS
  // ==============================================
  day5_say_no: {
    day: 5,
    title: "Dire non à une demande",
    intention: "Protéger votre énergie et vos priorités.",
    action: "Une demande arrivera cette semaine. Dites non poliment. Phrase clé : 'Je dois d'abord terminer mon projet.'",
    reflection: "Qu'avez-vous ressenti? Quelles ont été les conséquences réelles?",
    linkedThieves: ["difficulte_dire_non", "sollicitations_autres"],
    linkedProfiles: ["temps_sacrifie"]
  },

  day5_interrupt_redirect: {
    day: 5,
    title: "Gérer les interruptions",
    intention: "Rester concentré malgré les demandes.",
    action: "Cette semaine, chaque interruption : 'Je reviens vers toi en fin de journée.' Tenez parole.",
    reflection: "Les gens étaient-ils réellement déçus? Ou avaient-ils juste oublié?",
    linkedThieves: ["interruptions"],
    linkedProfiles: ["temps_disperse"]
  },

  day5_protect_personal_time: {
    day: 5,
    title: "Protéger votre temps personnel",
    intention: "Créer une limite entre travail et vie.",
    action: "Définir une heure pour arrêter de travailler. Cette semaine, respectez-la 5 jours sur 5.",
    reflection: "Comment vous vous sentez quand vous respectez votre limite?",
    linkedThieves: ["temps_sacrifie", "difficulte_dire_non"],
    linkedProfiles: ["temps_sacrifie", "temps_controle"]
  },

  day5_silence_phone: {
    day: 5,
    title: "Éteindre votre téléphone",
    intention: "Reprendre le contrôle volontaire.",
    action: "Une fois par jour (30 min), éteindre complètement votre téléphone.",
    reflection: "Qu'avez-vous découvert? Qu'avez-vous eu l'envie de faire?",
    linkedThieves: ["utilisation_excessive_telephone", "notifications"],
    linkedProfiles: ["temps_disperse"]
  },

  // ==============================================
  // JOUR 6 : MIEUX VIVRE VOTRE TEMPS
  // ==============================================
  day6_rest_actively: {
    day: 6,
    title: "Vous reposer activement",
    intention: "Recharger votre batterie vraiment.",
    action: "Bloquer 1h30 pour une activité sans culpabilité (marche, yoga, lecture, créatif).",
    reflection: "Avez-vous ressenti une véritable pause? Qu'est-ce qui vous a vraiment reposé?",
    linkedThieves: ["manque_energie"],
    linkedProfiles: ["temps_sacrifie", "temps_controle"]
  },

  day6_be_present: {
    day: 6,
    title: "Être vraiment présent",
    intention: "Cultiver la présence authentique.",
    action: "Choisir une activité cette semaine et la faire en pleine conscience (sans téléphone, sans distraction).",
    reflection: "Comment change l'expérience quand vous êtes vraiment là?",
    linkedThieves: ["surcharge_mentale", "utilisation_excessive_telephone"],
    linkedProfiles: ["temps_aligne"]
  },

  day6_celebrate_wins: {
    day: 6,
    title: "Célébrer vos réussites",
    intention: "Reconnaître votre progression.",
    action: "Lister 5 choses que vous avez accomplies cette semaine. Prendre 10 min pour les célébrer.",
    reflection: "Comment vous vous sentez quand vous reconnaissez votre progression?",
    linkedThieves: [],
    linkedProfiles: ["temps_aligne"]
  },

  // ==============================================
  // JOUR 7 : FAIRE LE BILAN ET PRÉPARER LA SUITE
  // ==============================================
  day7_weekly_review: {
    day: 7,
    title: "Faire le bilan de la semaine",
    intention: "Apprendre de votre expérience.",
    action: "30 min de réflexion : Qu'a marché? Qu'a été difficile? Qu'allez-vous garder ou changer?",
    reflection: "Quel insight vous surprend le plus cette semaine?",
    linkedThieves: [],
    linkedProfiles: []
  },

  day7_plan_next_week: {
    day: 7,
    title: "Préparer la semaine prochaine",
    intention: "Consolider les progrès.",
    action: "Choisir UN seul comportement à renforcer la semaine prochaine. Le planifier concrètement.",
    reflection: "Quel sera votre première victoire la semaine prochaine?",
    linkedThieves: [],
    linkedProfiles: []
  },

  day7_recommit: {
    day: 7,
    title: "Renouveler votre engagement",
    intention: "Ancrer votre intention profonde.",
    action: "Écrire en 3 lignes : Pourquoi est-ce important pour vous de mieux maîtriser votre temps?",
    reflection: "Relisez cette raison profonde quand vous êtes tenté de revenir aux anciennes habitudes.",
    linkedThieves: [],
    linkedProfiles: []
  }
};

/**
 * Assembleur de plan personnalisé
 * 
 * Logique :
 * 1. Pour chaque jour (1-7), sélectionner 1 action
 * 2. Prioriser par profil et voleurs de temps
 * 3. Éviter les redondances
 * 4. Assurer la progressivité (1=observation, 3=action, 7=bilan)
 */
export function generatePersonalizedPlan(primaryProfile, topThieves, mechanismScores) {
  const plan = [];
  const usedActions = new Set();

  // Jour 1 : Toujours commencer par observer
  const day1Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 1 && !usedActions.has(action))
    .filter(action => action.linkedThieves.some(t => topThieves.includes(t)));

  let day1Action = day1Options[0];
  if (!day1Action) {
    day1Action = Object.values(ACTION_LIBRARY).find(a => a.day === 1);
  }
  plan.push(day1Action);
  usedActions.add(day1Action);

  // Jour 2 : Clarifier
  const day2Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 2 && !usedActions.has(action))
    .filter(action => 
      action.linkedProfiles.includes(primaryProfile) ||
      action.linkedThieves.some(t => topThieves.includes(t))
    );

  let day2Action = day2Options[0];
  if (!day2Action) {
    day2Action = Object.values(ACTION_LIBRARY).find(a => a.day === 2 && !usedActions.has(a));
  }
  plan.push(day2Action);
  usedActions.add(day2Action);

  // Jour 3 : Supprimer/Réduire (priorité aux voleurs de temps)
  const day3Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 3 && !usedActions.has(action))
    .filter(action => action.linkedThieves.some(t => topThieves.includes(t)));

  let day3Action = day3Options[0];
  if (!day3Action) {
    day3Action = Object.values(ACTION_LIBRARY).find(a => a.day === 3 && !usedActions.has(a));
  }
  plan.push(day3Action);
  usedActions.add(day3Action);

  // Jour 4 : Organiser
  const day4Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 4 && !usedActions.has(action));

  let day4Action = day4Options[0];
  if (!day4Action) {
    day4Action = Object.values(ACTION_LIBRARY).find(a => a.day === 4 && !usedActions.has(a));
  }
  plan.push(day4Action);
  usedActions.add(day4Action);

  // Jour 5 : Protéger
  const day5Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 5 && !usedActions.has(action));

  let day5Action = day5Options[0];
  if (!day5Action) {
    day5Action = Object.values(ACTION_LIBRARY).find(a => a.day === 5 && !usedActions.has(a));
  }
  plan.push(day5Action);
  usedActions.add(day5Action);

  // Jour 6 : Mieux vivre
  const day6Options = Object.values(ACTION_LIBRARY)
    .filter(action => action.day === 6 && !usedActions.has(action));

  let day6Action = day6Options[0];
  if (!day6Action) {
    day6Action = Object.values(ACTION_LIBRARY).find(a => a.day === 6 && !usedActions.has(a));
  }
  plan.push(day6Action);
  usedActions.add(day6Action);

  // Jour 7 : Bilan
  const day7Action = Object.values(ACTION_LIBRARY).find(a => a.day === 7 && a.title === "Faire le bilan de la semaine");
  plan.push(day7Action);

  return plan;
}

/**
 * Récupère une action par jour
 */
export function getActionsByDay(day) {
  return Object.values(ACTION_LIBRARY).filter(action => action.day === day);
}

/**
 * Récupère toutes les actions
 */
export function getAllActions() {
  return Object.values(ACTION_LIBRARY);
}
