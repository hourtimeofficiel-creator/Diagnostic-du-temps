/**
 * RESULTS.JS
 * ==========
 * Gestion et formatage des résultats pour l'affichage web.
 * 
 * Responsabilités :
 * 1. Transformer les résultats bruts en textes d'interprétation
 * 2. Générer les messages personnalisés
 * 3. Préparer les données pour le PDF
 * 4. Fournir les explications détaillées
 */

import { PROFILES } from './profiles.js';
import { THIEVES_CONFIG } from './thieves.js';
import { GEARS_CONFIG } from './gears.js';
import { generatePersonalizedPlan } from './recommendations.js';

/**
 * INTERPRÉTATIONS PAR MÉCANISME ET NIVEAU
 * 
 * Niveaux :
 * 0-39 : Mécanisme prioritaire
 * 40-59 : Mécanisme fragile
 * 60-79 : Mécanisme en progression
 * 80-100 : Mécanisme solide
 */

const MECHANISM_INTERPRETATIONS = {
  comprendre: {
    0: {
      level: "Mécanisme prioritaire",
      interpretation: "Vous avez peu de visibilité sur votre utilisation du temps. C'est le point de départ : prendre conscience est la première étape du changement."
    },
    40: {
      level: "Mécanisme fragile",
      interpretation: "Vous commencez à identifier vos priorités, mais de manière inconstante. Vous manquez d'outils simples pour clarifier régulièrement."
    },
    60: {
      level: "Mécanisme en progression",
      interpretation: "Vous avez développé une bonne conscience de votre temps. Continuez à affiner vos outils d'observation quotidiens."
    },
    80: {
      level: "Mécanisme solide",
      interpretation: "Vous avez une excellente compréhension de votre temps. Vous identifiez rapidement vos priorités et reconnaissez les fuites."
    }
  },

  organiser: {
    0: {
      level: "Mécanisme prioritaire",
      interpretation: "L'organisation n'est pas votre force actuelle. Vous naviguez au jour le jour sans réelle structure. C'est normal et cela peut s'apprendre."
    },
    40: {
      level: "Mécanisme fragile",
      interpretation: "Vous avez des routines partielles, mais elles ne sont pas systématiques. L'imprévu vous fait facilement dévier."
    },
    60: {
      level: "Mécanisme en progression",
      interpretation: "Vous avez mis en place une base solide. Vos routines structurent vos journées. Continuez à les affiner."
    },
    80: {
      level: "Mécanisme solide",
      interpretation: "Votre organisation est robuste. Vous terminez ce que vous commencez et vous anticipez les imprévus efficacement."
    }
  },

  protéger: {
    0: {
      level: "Mécanisme prioritaire",
      interpretation: "Vous êtes submergé par les interruptions et les sollicitations. Apprendre à protéger votre temps sera transformateur."
    },
    40: {
      level: "Mécanisme fragile",
      interpretation: "Vous laissez trop de portes ouvertes aux interruptions. Vous dites oui trop facilement. Vous avez besoin de limites claires."
    },
    60: {
      level: "Mécanisme en progression",
      interpretation: "Vous protégez déjà certains créneaux. Continuez à renforcer vos limites et à dire non plus souvent."
    },
    80: {
      level: "Mécanisme solide",
      interpretation: "Vous avez mis en place des limites fortes. Vous protégez votre attention et vous savez dire non."
    }
  },

  agir: {
    0: {
      level: "Mécanisme prioritaire",
      interpretation: "Vous êtes épuisé et démotivé. Retrouver de l'énergie et passer à l'action malgré la fatigue sera votre priorité."
    },
    40: {
      level: "Mécanisme fragile",
      interpretation: "Vous avancez, mais vous vous sentez toujours fatigué. Votre énergie est usée par les frictions et les obstacles."
    },
    60: {
      level: "Mécanisme en progression",
      interpretation: "Vous avez retrouvé de l'élan. Continuez à prendre soin de votre énergie et à préserver du temps pour récupérer."
    },
    80: {
      level: "Mécanisme solide",
      interpretation: "Vous avancez avec constance et énergie. Vous prenez soin de vous et vous profitez vraiment de votre vie."
    }
  }
};

/**
 * Obtenir l'interprétation d'un mécanisme
 */
function getMechanismInterpretation(mechanism, score) {
  const interps = MECHANISM_INTERPRETATIONS[mechanism];
  if (!interps) return null;

  if (score < 40) return interps[0];
  if (score < 60) return interps[40];
  if (score < 80) return interps[60];
  return interps[80];
}

/**
 * FORMATTER LES RÉSULTATS POUR L'AFFICHAGE
 */

export function formatResults(results) {
  // Récupérer le profil principal
  const primaryProfile = PROFILES[results.primaryProfile];
  const secondaryProfile = results.secondaryProfile ? PROFILES[results.secondaryProfile] : null;

  // Récupérer les informations des voleurs de temps
  const topThievesInfo = results.topThieves.map(id => THIEVES_CONFIG[id]);

  // Récupérer les informations des rouages
  const prioritaryGearsInfo = results.prioritaryGears.map(id => GEARS_CONFIG[id]);

  // Générer le plan d'action
  const actionPlan = generatePersonalizedPlan(
    results.primaryProfile,
    results.topThieves,
    results.mechanismScores
  );

  // Interpréter les mécanismes
  const mechanismInterpretations = {
    comprendre: getMechanismInterpretation('comprendre', results.mechanismScores.comprendre),
    organiser: getMechanismInterpretation('organiser', results.mechanismScores.organiser),
    protéger: getMechanismInterpretation('protéger', results.mechanismScores['protéger']),
    agir: getMechanismInterpretation('agir', results.mechanismScores.agir)
  };

  // Compilation finale
  return {
    // Données brutes
    answers: results.answers,
    
    // Profils
    primaryProfile: {
      ...primaryProfile,
      id: results.primaryProfile
    },
    secondaryProfile: secondaryProfile ? {
      ...secondaryProfile,
      id: results.secondaryProfile
    } : null,

    // Scores
    globalIndex: results.globalIndex,
    mechanismScores: results.mechanismScores,
    mechanismInterpretations,

    // Voleurs de temps
    topThieves: topThievesInfo,

    // Rouages
    prioritaryGears: prioritaryGearsInfo,

    // Plan d'action
    actionPlan,

    // Métadonnées
    timestamp: results.timestamp,
    completed: results.completed
  };
}

/**
 * GÉNÉRER UNE PHRASE PERSONNALISÉE D'INTRODUCTION
 */
export function generateIntroduction(primaryProfile, globalIndex) {
  const profile = PROFILES[primaryProfile];
  
  const introductions = {
    temps_subi: `Vous vivez principalement dans l'urgence et la réactivité. Votre indice global de ${globalIndex}/100 confirme qu'il est temps de reprendre le contrôle.`,
    temps_disperse: `Vous vous dispersez facilement entre plusieurs tâches. Votre indice de ${globalIndex}/100 montre que la concentration sera votre clé de progrès.`,
    temps_sacrifie: `Vous donnez votre temps aux autres au détriment de vos besoins. Votre indice de ${globalIndex}/100 invite à vous recentrer.`,
    temps_controle: `Vous maîtrisez votre temps, mais peut-être trop rigidement. Votre indice de ${globalIndex}/100 suggère d'adoucir cette maîtrise.`,
    temps_aligne: `Vous avez développé une relation saine avec votre temps. Votre indice de ${globalIndex}/100 confirme votre bon équilibre.`,
    temps_transition: `Vous êtes en transition vers un meilleur équilibre. Votre indice de ${globalIndex}/100 montre une dynamique positive en cours.`
  };

  return introductions[primaryProfile] || "Votre diagnostic révèle des opportunités de progression.";
}

/**
 * GÉNÉRER LES FORCES PERSONNALISÉES
 */
export function generateStrengths(primaryProfile, mechanismScores) {
  const profile = PROFILES[primaryProfile];
  const strengths = profile.strengths.slice(0, 3);

  // Ajouter une force basée sur le mécanisme le plus fort
  const strongestMechanic = Object.entries(mechanismScores)
    .sort(([, a], [, b]) => b - a)[0];

  const mechanicStrengths = {
    comprendre: "Vous développez une excellente conscience de vous-même.",
    organiser: "Vous êtes capable de structurer et de planifier.",
    protéger: "Vous savez défendre votre temps.",
    agir: "Vous avancez avec énergie et présence."
  };

  return strengths;
}

/**
 * GÉNÉRER LES POINTS DE VIGILANCE
 */
export function generateCautionPoints(primaryProfile, mechanismScores, topThieves) {
  const profile = PROFILES[primaryProfile];
  const cautions = profile.risks.slice(0, 3);

  return cautions;
}

/**
 * RÉSUMÉ DES ROUAGES À TRAVAILLER
 */
export function generateGearsRationale(prioritaryGears, mechanismScores, topThieves) {
  const rationale = {};

  prioritaryGears.forEach(gearId => {
    const gear = GEARS_CONFIG[gearId];
    const mechanicScore = mechanismScores[gear.mechanism];

    if (mechanicScore < 60) {
      rationale[gearId] = `Votre score en "${gear.mechanism}" est de ${mechanicScore}/100. Renforcer ce rouage est essentiel.`;
    } else if (topThieves.some(t => gear.linkedThieves?.includes(t))) {
      rationale[gearId] = `Ce rouage combat directement vos voleurs de temps majeurs.`;
    } else {
      rationale[gearId] = `Ce rouage consolidera vos progrès vers un meilleur équilibre.`;
    }
  });

  return rationale;
}

/**
 * EXPORTS POUR TEMPLATES HTML
 */
export function getResultsForDisplay(results) {
  const formatted = formatResults(results);

  return {
    // Profil
    profileTitle: formatted.primaryProfile.title,
    profileSignature: formatted.primaryProfile.signature,
    profileDescription: formatted.primaryProfile.shortDescription,
    profileLongDescription: formatted.primaryProfile.longDescription,
    profileColor: formatted.primaryProfile.secondaryColor,
    profileSymbol: formatted.primaryProfile.symbol,
    secondaryProfileTitle: formatted.secondaryProfile?.title || null,

    // Introduction
    introduction: generateIntroduction(results.primaryProfile, formatted.globalIndex),

    // Scores
    globalIndex: formatted.globalIndex,
    mechanismScores: formatted.mechanismScores,
    mechanismInterpretations: formatted.mechanismInterpretations,

    // Contenu détaillé
    strengths: generateStrengths(results.primaryProfile, formatted.mechanismScores),
    cautionPoints: generateCautionPoints(results.primaryProfile, formatted.mechanismScores, results.topThieves),
    gearsRationale: generateGearsRationale(results.prioritaryGears, formatted.mechanismScores, results.topThieves),

    // Voleurs
    thieves: formatted.topThieves,

    // Rouages
    gears: formatted.prioritaryGears,

    // Plan
    actionPlan: formatted.actionPlan,

    // Raw
    raw: formatted
  };
}

/**
 * FORMATER UN SCORE AVEC BARRE
 */
export function formatScoreBar(score) {
  const percentage = Math.round((score / 100) * 20); // 20 caractères max
  const filled = '█'.repeat(percentage);
  const empty = '░'.repeat(20 - percentage);
  return `[${filled}${empty}] ${score}/100`;
}

/**
 * FORMATER LA DATE
 */
export function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * FORMATER L'HEURE
 */
export function formatTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}
