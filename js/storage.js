/**
 * STORAGE.JS
 * ==========
 * Gestion du stockage local des données sans transmission serveur.
 * 
 * Utilise sessionStorage pour les réponses temporaires (pendant le quiz)
 * Utilise localStorage pour les résultats finaux (persistants)
 * 
 * Aucune donnée n'est envoyée à un serveur.
 * L'utilisateur peut effacer ses données à tout moment.
 */

/**
 * CLÉS DE STOCKAGE
 */
const STORAGE_KEYS = {
  CURRENT_ANSWERS: 'diagnostic_current_answers',      // sessionStorage
  CURRENT_QUESTION: 'diagnostic_current_question',    // sessionStorage
  LAST_RESULTS: 'diagnostic_last_results',            // localStorage
  RESULTS_HISTORY: 'diagnostic_results_history',      // localStorage
};

/**
 * GESTION DES RÉPONSES EN COURS (sessionStorage)
 * 
 * sessionStorage vide automatiquement à la fermeture du navigateur.
 * Persiste si l'utilisateur actualise la page accidentellement.
 */

/**
 * Sauvegarder une réponse à une question
 * @param {number} questionId - ID de la question
 * @param {number} response - Réponse (1-5)
 */
export function saveAnswer(questionId, response) {
  try {
    const answers = loadAnswers();
    answers[questionId] = response;
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_ANSWERS, JSON.stringify(answers));
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la réponse:', error);
    return false;
  }
}

/**
 * Charger toutes les réponses en cours
 * @returns {Object} { questionId: response, ... }
 */
export function loadAnswers() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEYS.CURRENT_ANSWERS);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Erreur lors du chargement des réponses:', error);
    return {};
  }
}

/**
 * Récupérer une réponse spécifique
 * @param {number} questionId - ID de la question
 * @returns {number|null} La réponse ou null
 */
export function getAnswer(questionId) {
  const answers = loadAnswers();
  return answers[questionId] || null;
}

/**
 * Vérifier si toutes les questions sont répondues
 * @param {number} totalQuestions - Nombre total de questions
 * @returns {boolean}
 */
export function allAnswered(totalQuestions) {
  const answers = loadAnswers();
  const answeredCount = Object.keys(answers).length;
  return answeredCount === totalQuestions;
}

/**
 * Obtenir le nombre de réponses actuelles
 * @returns {number}
 */
export function getAnswerCount() {
  return Object.keys(loadAnswers()).length;
}

/**
 * Sauvegarder la question actuelle (pour reprendre)
 * @param {number} questionIndex - Index de la question (0-27)
 */
export function saveCurrentQuestion(questionIndex) {
  try {
    sessionStorage.setItem(STORAGE_KEYS.CURRENT_QUESTION, String(questionIndex));
    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde de la question courante:', error);
    return false;
  }
}

/**
 * Charger la question actuelle
 * @returns {number} Index de la question
 */
export function loadCurrentQuestion() {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEYS.CURRENT_QUESTION);
    return stored ? parseInt(stored, 10) : 0;
  } catch (error) {
    console.error('Erreur lors du chargement de la question courante:', error);
    return 0;
  }
}

/**
 * GESTION DES RÉSULTATS FINAUX (localStorage)
 * 
 * localStorage persiste même après fermeture du navigateur.
 * Permet à l'utilisateur de revoir ses résultats.
 */

/**
 * Sauvegarder les résultats finaux
 * @param {Object} results - Objet complet de résultats
 */
export function saveResults(results) {
  try {
    // Sauvegarder les résultats les plus récents
    localStorage.setItem(STORAGE_KEYS.LAST_RESULTS, JSON.stringify(results));

    // Ajouter à l'historique
    const history = loadResultsHistory();
    history.push({
      ...results,
      savedAt: new Date().toISOString()
    });

    // Garder seulement les 10 derniers diagnostics
    const trimmedHistory = history.slice(-10);
    localStorage.setItem(STORAGE_KEYS.RESULTS_HISTORY, JSON.stringify(trimmedHistory));

    return true;
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des résultats:', error);
    return false;
  }
}

/**
 * Charger les derniers résultats
 * @returns {Object|null}
 */
export function loadLastResults() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.LAST_RESULTS);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Erreur lors du chargement des derniers résultats:', error);
    return null;
  }
}

/**
 * Charger l'historique complet des résultats
 * @returns {Array}
 */
export function loadResultsHistory() {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.RESULTS_HISTORY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erreur lors du chargement de l\'historique:', error);
    return [];
  }
}

/**
 * Obtenir le nombre de diagnostics effectués
 * @returns {number}
 */
export function getDiagnosticsCount() {
  return loadResultsHistory().length;
}

/**
 * SUPPRESSION DES DONNÉES
 */

/**
 * Effacer toutes les réponses en cours
 * (pour recommencer le diagnostic)
 */
export function clearCurrentAnswers() {
  try {
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_ANSWERS);
    sessionStorage.removeItem(STORAGE_KEYS.CURRENT_QUESTION);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'effacement des réponses:', error);
    return false;
  }
}

/**
 * Effacer les derniers résultats
 */
export function clearLastResults() {
  try {
    localStorage.removeItem(STORAGE_KEYS.LAST_RESULTS);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'effacement des résultats:', error);
    return false;
  }
}

/**
 * Effacer tout l'historique des résultats
 */
export function clearResultsHistory() {
  try {
    localStorage.removeItem(STORAGE_KEYS.RESULTS_HISTORY);
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'effacement de l\'historique:', error);
    return false;
  }
}

/**
 * Effacer TOUTES les données (réponses, résultats, historique)
 * Cette action est irréversible
 */
export function clearAllData() {
  try {
    clearCurrentAnswers();
    clearLastResults();
    clearResultsHistory();
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'effacement complet:', error);
    return false;
  }
}

/**
 * STATISTIQUES DE STOCKAGE
 */

/**
 * Obtenir un résumé du stockage
 * @returns {Object}
 */
export function getStorageSummary() {
  return {
    hasCurrentAnswers: sessionStorage.getItem(STORAGE_KEYS.CURRENT_ANSWERS) !== null,
    currentAnswerCount: getAnswerCount(),
    hasLastResults: localStorage.getItem(STORAGE_KEYS.LAST_RESULTS) !== null,
    diagnosticsCount: getDiagnosticsCount(),
    lastDiagnosticDate: (() => {
      const results = loadLastResults();
      return results ? new Date(results.timestamp).toLocaleString('fr-FR') : null;
    })()
  };
}

/**
 * Vérifier la disponibilité du stockage
 * Certains navigateurs ou configurations peuvent bloquer le stockage
 */
export function isStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    sessionStorage.setItem(testKey, 'test');
    sessionStorage.removeItem(testKey);
    
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    
    return true;
  } catch (error) {
    console.warn('Stockage local non disponible:', error);
    return false;
  }
}

/**
 * EXPORTE POUR DÉBOGAGE
 * Afficher les données stockées dans la console
 */
export function debugStorage() {
  console.log('=== DIAGNOSTIC STORAGE DEBUG ===');
  console.log('Current Answers:', loadAnswers());
  console.log('Current Question:', loadCurrentQuestion());
  console.log('Last Results:', loadLastResults());
  console.log('Results History:', loadResultsHistory());
  console.log('Storage Summary:', getStorageSummary());
  console.log('Storage Available:', isStorageAvailable());
  console.log('================================');
}

/**
 * AFFICHAGE DE LA POLITIQUE DE CONFIDENTIALITÉ
 */
export const PRIVACY_NOTICE = `
Vos réponses sont analysées localement dans votre navigateur.

Aucune donnée n'est transmise à un serveur.
Aucun cookie de suivi n'est installé.
Aucune collecte de données personnelles.

Vous pouvez :
- Consulter vos résultats à tout moment
- Supprimer vos données à tout moment
- Recommencer le diagnostic autant de fois que vous le souhaitez

Vos données restent votre propriété.
`;
