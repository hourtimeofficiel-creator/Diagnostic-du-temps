/**
 * APP.JS
 * ======
 * Orchestrateur principal de l'application HourTime Diagnostic.
 * 
 * Flux :
 * 1. Initialisation (charger les données stockées)
 * 2. Quiz (28 questions, 4 par profil/mécanisme)
 * 3. Calcul des résultats (scoring)
 * 4. Affichage des résultats
 * 5. Export PDF
 * 6. Gestion de la navigation
 */

import { QUESTIONS } from './questions.js';
import { PROFILES } from './profiles.js';
import { calculateResults } from './scoring.js';
import { 
  saveAnswer, 
  loadAnswers, 
  allAnswered, 
  getAnswerCount,
  saveCurrentQuestion,
  loadCurrentQuestion,
  saveResults,
  loadLastResults,
  clearCurrentAnswers,
  isStorageAvailable
} from './storage.js';
import { 
  getResultsForDisplay,
  formatDate,
  formatTime
} from './results.js';
import { 
  generatePDF,
  showPdfGenerationIndicator
} from './pdf-generator.js';

/**
 * STATE GLOBAL
 */
const AppState = {
  currentPage: 'home',
  currentQuestionIndex: 0,
  totalQuestions: QUESTIONS.length,
  quizStarted: false,
  results: null,
  displayResults: null
};

/**
 * INITIALISATION
 */
function initApp() {
  console.log('🎯 Initialisation de l\'application HourTime Diagnostic');

  // Vérifier la disponibilité du stockage
  if (!isStorageAvailable()) {
    console.warn('⚠️ Stockage local non disponible');
    showAlert('Attention : Le stockage local n\'est pas disponible. Vos données ne seront pas persistées.');
  }

  // Charger les données précédentes si elles existent
  const lastResults = loadLastResults();
  if (lastResults) {
    console.log('📊 Résultats précédents trouvés');
    AppState.results = lastResults;
    AppState.displayResults = getResultsForDisplay(lastResults);
  }

  // Afficher la page d'accueil
  showHome();
  attachEventListeners();
}

/**
 * ==================
 * PAGE D'ACCUEIL
 * ==================
 */

function showHome() {
  AppState.currentPage = 'home';
  
  const container = document.getElementById('app-container');
  if (!container) return;

  let html = `
    <div class="page home-page">
      <header class="app-header">
        <h1>⏰ HourTime</h1>
        <p class="tagline">Diagnostic du Temps</p>
      </header>

      <div class="home-content">
        <section class="hero">
          <h2>Comprenez votre relation au temps</h2>
          <p>En 28 questions simples, découvrez votre profil temporel et recevez un plan d'action personnalisé.</p>
        </section>

        <section class="features">
          <div class="feature">
            <span class="icon">📊</span>
            <h3>Diagnostic complet</h3>
            <p>Identifiez vos forces et vos défis face au temps</p>
          </div>
          <div class="feature">
            <span class="icon">🎯</span>
            <h3>Plan personnalisé</h3>
            <p>7 jours d'actions progressives adaptées à vous</p>
          </div>
          <div class="feature">
            <span class="icon">📄</span>
            <h3>Rapport PDF</h3>
            <p>Téléchargez votre diagnostic complet</p>
          </div>
        </section>

        <button id="start-quiz-btn" class="btn btn-primary">
          Commencer le diagnostic
        </button>

        ${AppState.results ? `
          <button id="view-results-btn" class="btn btn-secondary">
            Voir mes derniers résultats
          </button>
        ` : ''}

        <footer class="home-footer">
          <p class="privacy-notice">
            ✓ Vos données restent privées - Analyse entièrement locale<br>
            ✓ Aucun serveur - Aucune transmission de données
          </p>
        </footer>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

/**
 * ==================
 * PAGE DU QUIZ
 * ==================
 */

function showQuiz() {
  AppState.currentPage = 'quiz';
  AppState.quizStarted = true;

  // Charger la progression précédente si elle existe
  if (AppState.currentQuestionIndex === 0 && getAnswerCount() > 0) {
    AppState.currentQuestionIndex = loadCurrentQuestion();
  }

  const question = QUESTIONS[AppState.currentQuestionIndex];
  const container = document.getElementById('app-container');
  if (!container) return;

  // Calcul de la progression
  const progress = ((AppState.currentQuestionIndex + 1) / AppState.totalQuestions) * 100;
  const currentAnswer = document.querySelector('input[name="answer"]:checked')?.value || null;

  let html = `
    <div class="page quiz-page">
      <header class="quiz-header">
        <h1>Diagnostic du Temps</h1>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <p class="progress-text">${AppState.currentQuestionIndex + 1}/${AppState.totalQuestions}</p>
      </header>

      <div class="quiz-content">
        <div class="question-card">
          <h2 class="question-text">${question.text}</h2>
          
          <div class="question-context">
            <p>${question.context}</p>
          </div>

          <div class="answers">
            ${[1, 2, 3, 4, 5].map(score => `
              <label class="answer-option">
                <input 
                  type="radio" 
                  name="answer" 
                  value="${score}"
                  ${getAnswer(question.id) == score ? 'checked' : ''}
                >
                <span class="answer-label">
                  <span class="score">${score}</span>
                  <span class="text">${getAnswerText(score)}</span>
                </span>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="quiz-navigation">
          <button 
            id="prev-btn" 
            class="btn btn-secondary"
            ${AppState.currentQuestionIndex === 0 ? 'disabled' : ''}
          >
            ← Précédent
          </button>

          <div class="answer-counter">
            ${getAnswerCount()}/${AppState.totalQuestions} réponses
          </div>

          <button 
            id="next-btn" 
            class="btn btn-secondary"
            ${AppState.currentQuestionIndex === AppState.totalQuestions - 1 ? 'disabled' : ''}
          >
            Suivant →
          </button>
        </div>

        ${allAnswered(AppState.totalQuestions) ? `
          <button id="complete-quiz-btn" class="btn btn-primary btn-large">
            Obtenir mes résultats
          </button>
        ` : ''}

        <button id="cancel-quiz-btn" class="btn btn-link">
          Quitter le diagnostic
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

/**
 * ==================
 * PAGE DES RÉSULTATS
 * ==================
 */

function showResults() {
  AppState.currentPage = 'results';

  if (!AppState.displayResults) {
    showHome();
    return;
  }

  const results = AppState.displayResults;
  const container = document.getElementById('app-container');
  if (!container) return;

  let html = `
    <div class="page results-page">
      <header class="results-header">
        <h1>Vos résultats</h1>
      </header>

      <div class="results-content">
        <!-- Section Profil -->
        <section class="results-section profile-section">
          <div class="profile-card">
            <h2>${results.profileTitle}</h2>
            <p class="profile-signature">${results.profileSignature}</p>
            
            <div class="global-index">
              <span class="index-number">${results.globalIndex}</span>
              <span class="index-label">Indice global</span>
            </div>

            ${results.secondaryProfileTitle ? `
              <p class="secondary-profile">Profil secondaire: <strong>${results.secondaryProfileTitle}</strong></p>
            ` : ''}
          </div>
        </section>

        <!-- Section Mécanismes -->
        <section class="results-section mechanisms-section">
          <h3>Les quatre mécanismes</h3>
          <div class="mechanisms-grid">
            ${Object.entries(results.mechanismScores).map(([mech, score]) => {
              const interp = results.mechanismInterpretations[mech];
              return `
                <div class="mechanism-card">
                  <h4>${mech.charAt(0).toUpperCase() + mech.slice(1)}</h4>
                  <div class="mechanism-score">${score}/100</div>
                  <div class="mechanism-bar">
                    <div class="mechanism-fill" style="width: ${score}%"></div>
                  </div>
                  <p class="mechanism-level">${interp.level}</p>
                  <p class="mechanism-interpretation">${interp.interpretation}</p>
                </div>
              `;
            }).join('')}
          </div>
        </section>

        <!-- Section Forces -->
        <section class="results-section strengths-section">
          <h3>Vos forces</h3>
          <ul class="strengths-list">
            ${results.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </section>

        <!-- Section Voleurs de Temps -->
        <section class="results-section thieves-section">
          <h3>Vos trois voleurs de temps dominants</h3>
          <div class="thieves-list">
            ${results.thieves.map((thief, idx) => `
              <div class="thief-card">
                <h4>${idx + 1}. ${thief.name}</h4>
                <p>${thief.explanation}</p>
                <p><strong>Signe observable :</strong> ${thief.observableSign}</p>
                <p><strong>Première action :</strong> ${thief.firstAction}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section Rouages -->
        <section class="results-section gears-section">
          <h3>Vos rouages prioritaires</h3>
          <div class="gears-list">
            ${results.gears.map(gear => `
              <div class="gear-card">
                <h4>${gear.id}. ${gear.title}</h4>
                <p class="gear-mechanism">Mécanisme: <strong>${gear.mechanism}</strong></p>
                <p>${gear.shortDescription}</p>
                <p><strong>Action :</strong> ${gear.action}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Section Plan d'Action -->
        <section class="results-section plan-section">
          <h3>Votre plan d'action sur 7 jours</h3>
          <div class="action-plan">
            ${results.actionPlan.map(day => `
              <div class="plan-day">
                <h4>Jour ${day.day} : ${day.title}</h4>
                <p><strong>Intention :</strong> ${day.intention}</p>
                <p><strong>Action :</strong> ${day.action}</p>
                <p><em>Réflexion : ${day.reflection}</em></p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Boutons d'action -->
        <div class="results-actions">
          <button id="download-pdf-btn" class="btn btn-primary">
            📥 Télécharger le rapport PDF
          </button>

          <button id="restart-quiz-btn" class="btn btn-secondary">
            Refaire le diagnostic
          </button>

          <button id="back-home-btn" class="btn btn-link">
            ← Retour à l'accueil
          </button>
        </div>

        <footer class="results-footer">
          <p>Diagnostic généré le ${formatDate(results.raw.timestamp)} à ${formatTime(results.raw.timestamp)}</p>
        </footer>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

/**
 * ==================
 * UTILITAIRES
 * ==================
 */

function getAnswerText(score) {
  const texts = {
    1: 'Jamais',
    2: 'Rarement',
    3: 'Parfois',
    4: 'Souvent',
    5: 'Toujours'
  };
  return texts[score] || '';
}

function getAnswer(questionId) {
  const answers = loadAnswers();
  return answers[questionId] || null;
}

function showAlert(message) {
  const alert = document.createElement('div');
  alert.className = 'alert';
  alert.textContent = message;
  document.body.appendChild(alert);
  
  setTimeout(() => alert.remove(), 5000);
}

/**
 * ==================
 * GESTION DES ÉVÉNEMENTS
 * ==================
 */

function attachEventListeners() {
  const container = document.getElementById('app-container');
  if (!container) return;

  // Événements de la page d'accueil
  container.addEventListener('click', (e) => {
    if (e.target.id === 'start-quiz-btn') {
      startQuiz();
    }
    if (e.target.id === 'view-results-btn') {
      showResults();
    }

    // Événements du quiz
    if (e.target.id === 'next-btn') {
      nextQuestion();
    }
    if (e.target.id === 'prev-btn') {
      previousQuestion();
    }
    if (e.target.id === 'complete-quiz-btn') {
      completeQuiz();
    }
    if (e.target.id === 'cancel-quiz-btn') {
      cancelQuiz();
    }

    // Événements des résultats
    if (e.target.id === 'download-pdf-btn') {
      downloadPDF();
    }
    if (e.target.id === 'restart-quiz-btn') {
      restartQuiz();
    }
    if (e.target.id === 'back-home-btn') {
      showHome();
    }
  });

  // Sauvegarder les réponses en temps réel
  container.addEventListener('change', (e) => {
    if (e.target.name === 'answer') {
      const questionId = QUESTIONS[AppState.currentQuestionIndex].id;
      saveAnswer(questionId, parseInt(e.target.value, 10));
      saveCurrentQuestion(AppState.currentQuestionIndex);
    }
  });
}

function startQuiz() {
  clearCurrentAnswers();
  AppState.currentQuestionIndex = 0;
  AppState.results = null;
  AppState.displayResults = null;
  showQuiz();
}

function nextQuestion() {
  if (AppState.currentQuestionIndex < AppState.totalQuestions - 1) {
    AppState.currentQuestionIndex++;
    saveCurrentQuestion(AppState.currentQuestionIndex);
    showQuiz();
  }
}

function previousQuestion() {
  if (AppState.currentQuestionIndex > 0) {
    AppState.currentQuestionIndex--;
    saveCurrentQuestion(AppState.currentQuestionIndex);
    showQuiz();
  }
}

function completeQuiz() {
  // Calculer les résultats
  const answers = loadAnswers();
  AppState.results = calculateResults(answers);

  // Sauvegarder les résultats
  saveResults(AppState.results);

  // Formater pour l'affichage
  AppState.displayResults = getResultsForDisplay(AppState.results);

  // Afficher les résultats
  showResults();
}

function cancelQuiz() {
  if (confirm('Êtes-vous sûr de vouloir quitter? Vos réponses actuelles seront perdues.')) {
    clearCurrentAnswers();
    AppState.currentQuestionIndex = 0;
    showHome();
  }
}

function downloadPDF() {
  const indicator = showPdfGenerationIndicator();
  
  setTimeout(() => {
    const result = generatePDF(AppState.displayResults);
    indicator.remove();
    
    if (result.success) {
      showAlert(`✓ ${result.filename} téléchargé!`);
    } else {
      showAlert(`✗ Erreur lors de la génération du PDF: ${result.error}`);
    }
  }, 500);
}

function restartQuiz() {
  if (confirm('Êtes-vous sûr de vouloir recommencer le diagnostic?')) {
    startQuiz();
  }
}

/**
 * ==================
 * LANCEMENT
 * ==================
 */

// Initialiser au chargement du DOM
document.addEventListener('DOMContentLoaded', initApp);

// Export pour accès global si nécessaire
window.HourTimeApp = {
  AppState,
  showHome,
  showQuiz,
  showResults,
  startQuiz,
  nextQuestion,
  previousQuestion,
  completeQuiz,
  cancelQuiz,
  downloadPDF,
  restartQuiz
};
