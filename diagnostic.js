/* ============================================
   DIAGNOSTIC.JS - HourTime Diagnostic 28 Questions
   Logique complète du diagnostic interactif
   ============================================ */

// ============================================
// BASE DE DONNÉES DES QUESTIONS (28 QUESTIONS)
// ============================================

const diagnosticQuestions = [
    {
        id: 1,
        category: 'gestion_temps',
        question: 'Comment évaluez-vous votre gestion du temps ?',
        options: [
            { text: 'Très mauvaise - Je me sens toujours débordé', value: 1 },
            { text: 'Mauvaise - J\'ai des difficultés', value: 2 },
            { text: 'Moyenne - Cela varie', value: 3 },
            { text: 'Bonne - Je maîtrise mon temps', value: 4 },
            { text: 'Excellente - Je suis très organisé', value: 5 }
        ]
    },
    {
        id: 2,
        category: 'planification',
        question: 'Planifiez-vous vos journées et vos semaines ?',
        options: [
            { text: 'Jamais - Je préfère ��tre spontané', value: 1 },
            { text: 'Rarement - Seulement quand c\'est nécessaire', value: 2 },
            { text: 'Parfois - De façon occasionnelle', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - J\'ai un système rigoureux', value: 5 }
        ]
    },
    {
        id: 3,
        category: 'priorites',
        question: 'Établissez-vous clairement vos priorités ?',
        options: [
            { text: 'Pas du tout - Tout me semble urgent', value: 1 },
            { text: 'Rarement - Je vois tout comme prioritaire', value: 2 },
            { text: 'Parfois - Quand c\'est évident', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - J\'utilise une méthode', value: 5 }
        ]
    },
    {
        id: 4,
        category: 'distractions',
        question: 'Combien de temps perdez-vous par jour à des distractions ?',
        options: [
            { text: 'Plus de 4 heures', value: 1 },
            { text: '2-4 heures', value: 2 },
            { text: '1-2 heures', value: 3 },
            { text: '30 min - 1 heure', value: 4 },
            { text: 'Moins de 30 minutes', value: 5 }
        ]
    },
    {
        id: 5,
        category: 'repos',
        question: 'Accordez-vous suffisamment de temps au repos et à la détente ?',
        options: [
            { text: 'Jamais - Je suis constamment occupé', value: 1 },
            { text: 'Rarement - Je manque de repos', value: 2 },
            { text: 'Parfois - Pas assez régulièrement', value: 3 },
            { text: 'Souvent - Je prends du temps pour moi', value: 4 },
            { text: 'Toujours - Je maintiens un équilibre', value: 5 }
        ]
    },
    {
        id: 6,
        category: 'famille_amis',
        question: 'Consacrez-vous du temps à votre famille et vos amis ?',
        options: [
            { text: 'Très peu - Moins d\'une heure par semaine', value: 1 },
            { text: 'Peu - Quelques heures par semaine', value: 2 },
            { text: 'Modérément - Quelques heures régulièrement', value: 3 },
            { text: 'Beaucoup - Plusieurs heures par semaine', value: 4 },
            { text: 'Énormément - Un temps significatif chaque jour', value: 5 }
        ]
    },
    {
        id: 7,
        category: 'sante',
        question: 'Consacrez-vous du temps à votre santé (exercice, sommeil) ?',
        options: [
            { text: 'Jamais - Je néglise complètement', value: 1 },
            { text: 'Rarement - Occasionnellement', value: 2 },
            { text: 'Parfois - De façon irrégulière', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - C\'est une priorité', value: 5 }
        ]
    },
    {
        id: 8,
        category: 'developpement',
        question: 'Investissez-vous dans votre développement personnel ?',
        options: [
            { text: 'Jamais - Ce n\'est pas une priorité', value: 1 },
            { text: 'Rarement - Occasionnellement', value: 2 },
            { text: 'Parfois - Quand j\'ai du temps libre', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - J\'y consacre du temps régulièrement', value: 5 }
        ]
    },
    {
        id: 9,
        category: 'satisfaction',
        question: 'Êtes-vous satisfait de l\'utilisation de votre temps ?',
        options: [
            { text: 'Très insatisfait - Je fais trop de choses inutiles', value: 1 },
            { text: 'Insatisfait - Je pourrais mieux faire', value: 2 },
            { text: 'Neutre - C\'est acceptable', value: 3 },
            { text: 'Satisfait - Je suis content en général', value: 4 },
            { text: 'Très satisfait - Je suis vraiment heureux', value: 5 }
        ]
    },
    {
        id: 10,
        category: 'objectifs',
        question: 'Avez-vous des objectifs clairs pour votre temps ?',
        options: [
            { text: 'Pas du tout - Je n\'y ai jamais pensé', value: 1 },
            { text: 'Vaguement - J\'en ai une idée', value: 2 },
            { text: 'Partiellement - Certains sont clairs', value: 3 },
            { text: 'Largement - La plupart sont définis', value: 4 },
            { text: 'Totalement - J\'ai des objectifs précis', value: 5 }
        ]
    },
    {
        id: 11,
        category: 'productivite',
        question: 'Quelle est votre productivité dans les tâches importantes ?',
        options: [
            { text: 'Très faible - Je procrastine beaucoup', value: 1 },
            { text: 'Faible - Je m\'y mets tardivement', value: 2 },
            { text: 'Moyenne - Dépend du jour', value: 3 },
            { text: 'Élevée - Je suis généralement efficace', value: 4 },
            { text: 'Très élevée - Je complète tout rapidement', value: 5 }
        ]
    },
    {
        id: 12,
        category: 'loisirs',
        question: 'Accordez-vous du temps à vos loisirs et passions ?',
        options: [
            { text: 'Jamais - J\'en ai pas le temps', value: 1 },
            { text: 'Rarement - Très occasionnellement', value: 2 },
            { text: 'Parfois - Quelques fois par mois', value: 3 },
            { text: 'Souvent - Régulièrement par semaine', value: 4 },
            { text: 'Toujours - Je protège ce temps', value: 5 }
        ]
    },
    {
        id: 13,
        category: 'travail',
        question: 'Avez-vous une bonne séparation travail/vie personnelle ?',
        options: [
            { text: 'Non - Je travaille constamment', value: 1 },
            { text: 'Rarement - Difficilement séparé', value: 2 },
            { text: 'Parfois - Occasional mix-up', value: 3 },
            { text: 'Généralement - Bien délimité', value: 4 },
            { text: 'Toujours - Très bien séparé', value: 5 }
        ]
    },
    {
        id: 14,
        category: 'sommeil',
        question: 'Dormez-vous suffisamment chaque nuit ?',
        options: [
            { text: 'Non - Moins de 5 heures', value: 1 },
            { text: 'Peu - 5 à 6 heures', value: 2 },
            { text: 'Passable - 6 à 7 heures', value: 3 },
            { text: 'Bien - 7 à 8 heures', value: 4 },
            { text: 'Excellent - Plus de 8 heures', value: 5 }
        ]
    },
    {
        id: 15,
        category: 'technologie',
        question: 'Gérez-vous bien l\'utilisation de la technologie ?',
        options: [
            { text: 'Non - Je suis accroché 24/7', value: 1 },
            { text: 'Mal - Je vérifie souvent mon téléphone', value: 2 },
            { text: 'Moyen - Contrôle partiel', value: 3 },
            { text: 'Bien - Je fixe des limites', value: 4 },
            { text: 'Excellent - Je suis maître', value: 5 }
        ]
    },
    {
        id: 16,
        category: 'equilibre_vie_travail',
        question: 'Comment vous sentez-vous équilibré entre vie et travail ?',
        options: [
            { text: 'Très déséquilibré - Trop de travail', value: 1 },
            { text: 'Déséquilibré - Priorité au travail', value: 2 },
            { text: 'Relativement équilibré', value: 3 },
            { text: 'Bien équilibré', value: 4 },
            { text: 'Parfaitement équilibré', value: 5 }
        ]
    },
    {
        id: 17,
        category: 'stress',
        question: 'Quel est votre niveau de stress général ?',
        options: [
            { text: 'Très élevé - Constamment stressé', value: 1 },
            { text: 'Élevé - Souvent stressé', value: 2 },
            { text: 'Modéré - Parfois stressé', value: 3 },
            { text: 'Faible - Rarement stressé', value: 4 },
            { text: 'Très faible - Calme et serein', value: 5 }
        ]
    },
    {
        id: 18,
        category: 'routine',
        question: 'Avez-vous une routine quotidienne stable ?',
        options: [
            { text: 'Non - Complètement chaotique', value: 1 },
            { text: 'Peu - Très irrégulier', value: 2 },
            { text: 'Partiellement - Quelques habitudes', value: 3 },
            { text: 'Largement - Routine bien établie', value: 4 },
            { text: 'Entièrement - Très structuré', value: 5 }
        ]
    },
    {
        id: 19,
        category: 'apprentissage',
        question: 'Consacrez-vous du temps à l\'apprentissage continu ?',
        options: [
            { text: 'Jamais - J\'ai pas le temps', value: 1 },
            { text: 'Rarement - Très occasionnellement', value: 2 },
            { text: 'Parfois - Quelques fois par mois', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - C\'est une priorité', value: 5 }
        ]
    },
    {
        id: 20,
        category: 'delegation',
        question: 'Savez-vous déléguer des tâches ?',
        options: [
            { text: 'Non - Je fais tout seul', value: 1 },
            { text: 'Difficilement - Je contrôle trop', value: 2 },
            { text: 'Partiellement - Je délègue quelquefois', value: 3 },
            { text: 'Généralement - Je délègue bien', value: 4 },
            { text: 'Excellemment - Je sais déléguer', value: 5 }
        ]
    },
    {
        id: 21,
        category: 'flexibilite',
        question: 'Êtes-vous flexible face aux changements ?',
        options: [
            { text: 'Non - Je suis rigide et inflexible', value: 1 },
            { text: 'Difficilement - Je n\'aime pas changer', value: 2 },
            { text: 'Partiellement - J\'accepte certains changements', value: 3 },
            { text: 'Généralement - Je m\'adapte bien', value: 4 },
            { text: 'Totalement - Je suis très adaptable', value: 5 }
        ]
    },
    {
        id: 22,
        category: 'concentration',
        question: 'Maintenez-vous votre concentration sur une tâche ?',
        options: [
            { text: 'Non - Je suis constamment distrait', value: 1 },
            { text: 'Difficilement - Je me perds facilement', value: 2 },
            { text: 'Moyennement - Je me concentre parfois', value: 3 },
            { text: 'Généralement - Je reste concentré', value: 4 },
            { text: 'Excellemment - Je suis très concentré', value: 5 }
        ]
    },
    {
        id: 23,
        category: 'finances_temps',
        question: 'Budgétisez-vous votre temps comme votre argent ?',
        options: [
            { text: 'Non - Je ne fais pas attention', value: 1 },
            { text: 'Rarement - J\'y pense peu', value: 2 },
            { text: 'Parfois - Quelquefois', value: 3 },
            { text: 'Souvent - Je suis assez attentif', value: 4 },
            { text: 'Toujours - Je planifie précisément', value: 5 }
        ]
    },
    {
        id: 24,
        category: 'evenements',
        question: 'Réservez-vous du temps pour les événements importants ?',
        options: [
            { text: 'Non - Je les oublie souvent', value: 1 },
            { text: 'Rarement - Découvert à la dernière minute', value: 2 },
            { text: 'Parfois - Pas toujours à temps', value: 3 },
            { text: 'Généralement - Je les prépare', value: 4 },
            { text: 'Toujours - Je les plannifie d\'avance', value: 5 }
        ]
    },
    {
        id: 25,
        category: 'motivation',
        question: 'Êtes-vous motivé par vos objectifs ?',
        options: [
            { text: 'Non - J\'ai pas de motivation', value: 1 },
            { text: 'Peu - Je manque de motivation', value: 2 },
            { text: 'Partiellement - Certains jours', value: 3 },
            { text: 'Généralement - Je suis motivé', value: 4 },
            { text: 'Totalement - Je suis très motivé', value: 5 }
        ]
    },
    {
        id: 26,
        category: 'accomplissement',
        question: 'Avez-vous le sentiment d\'accomplir vos buts ?',
        options: [
            { text: 'Non - J\'accomplis rarement', value: 1 },
            { text: 'Peu - Difficilement complété', value: 2 },
            { text: 'Partiellement - Quelquefois', value: 3 },
            { text: 'Généralement - Je complète mes buts', value: 4 },
            { text: 'Régulièrement - Je réalise mon potentiel', value: 5 }
        ]
    },
    {
        id: 27,
        category: 'reflexion',
        question: 'Prenez-vous du temps pour réfléchir et planifier ?',
        options: [
            { text: 'Jamais - Je fonce sans réfléchir', value: 1 },
            { text: 'Rarement - Très occasionnellement', value: 2 },
            { text: 'Parfois - Quelques fois par mois', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - C\'est une habitude', value: 5 }
        ]
    },
    {
        id: 28,
        category: 'vision',
        question: 'Avez-vous une vision claire pour votre avenir ?',
        options: [
            { text: 'Non - Je ne sais pas où je vais', value: 1 },
            { text: 'Vague - Une idée floue', value: 2 },
            { text: 'Partiellement - Quelques idées', value: 3 },
            { text: 'Largement - Bonne vision globale', value: 4 },
            { text: 'Totalement - Vision claire et précise', value: 5 }
        ]
    }
];

// ============================================
// ÉTAT GLOBAL
// ============================================

const state = {
    currentQuestion: 0,
    responses: {},
    showResults: false
};

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

// Sauvegarder les réponses dans localStorage
function saveResponses() {
    localStorage.setItem('diagnosticResponses', JSON.stringify(state.responses));
    localStorage.setItem('currentQuestion', state.currentQuestion);
}

// Charger les réponses depuis localStorage
function loadResponses() {
    const saved = localStorage.getItem('diagnosticResponses');
    if (saved) {
        state.responses = JSON.parse(saved);
    }
    const currentQ = localStorage.getItem('currentQuestion');
    if (currentQ) {
        state.currentQuestion = parseInt(currentQ);
    }
}

// Aller au diagnostic - CORRIGÉ POUR L'HTML RÉEL
function goToDiagnostic() {
    console.log('Démarrage du diagnostic');
    const accueilSection = document.querySelector('.accueil-section');
    const diagnosticSection = document.getElementById('diagnostic');
    const resultatsSection = document.getElementById('resultats');
    
    if (accueilSection) accueilSection.style.display = 'none';
    if (diagnosticSection) diagnosticSection.style.display = 'flex';
    if (resultatsSection) resultatsSection.style.display = 'none';
    
    state.currentQuestion = 0;
    renderQuestion();
    if (diagnosticSection) {
        diagnosticSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// RENDU DES QUESTIONS
// ============================================

function renderQuestion() {
    const question = diagnosticQuestions[state.currentQuestion];
    const container = document.getElementById('questionContainer');
    
    if (!container) {
        console.error('Container de questions non trouvé!');
        return;
    }
    
    // Construire le HTML de la question
    let html = `
        <div class="question-content">
            <h3 class="question-title">${question.question}</h3>
            <ul class="options-list">
    `;
    
    question.options.forEach((option, index) => {
        const optionId = `option-${state.currentQuestion}-${index}`;
        const isChecked = state.responses[question.id] === option.value ? 'checked' : '';
        
        html += `
            <li class="option-item">
                <input 
                    type="radio" 
                    id="${optionId}" 
                    name="question-${question.id}" 
                    value="${option.value}"
                    class="option-input"
                    ${isChecked}
                    onchange="recordResponse(${question.id}, ${option.value})"
                >
                <label for="${optionId}" class="option-label">${option.text}</label>
            </li>
        `;
    });
    
    html += `
            </ul>
        </div>
    `;
    container.innerHTML = html;
    
    // Mettre à jour la barre de progression
    updateProgress();
    updateNavigationButtons();
}

// Enregistrer la réponse
function recordResponse(questionId, value) {
    state.responses[questionId] = value;
    saveResponses();
    console.log(`Réponse enregistrée - Q${questionId}: ${value}`);
}

// Mettre à jour la barre de progression
function updateProgress() {
    const progress = ((state.currentQuestion + 1) / diagnosticQuestions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) progressFill.style.width = progress + '%';
    
    const currentQ = document.getElementById('currentQuestion');
    if (currentQ) currentQ.textContent = state.currentQuestion + 1;
    
    const totalQ = document.getElementById('totalQuestions');
    if (totalQ) totalQ.textContent = diagnosticQuestions.length;
}

// Mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.style.display = state.currentQuestion > 0 ? 'inline-flex' : 'none';
    }
    
    if (nextBtn) {
        if (state.currentQuestion === diagnosticQuestions.length - 1) {
            nextBtn.textContent = 'Voir les résultats ✓';
        } else {
            nextBtn.textContent = 'Suivant →';
        }
    }
}

// ============================================
// NAVIGATION
// ============================================

function nextQuestion() {
    if (state.currentQuestion < diagnosticQuestions.length - 1) {
        state.currentQuestion++;
        saveResponses();
        renderQuestion();
        document.getElementById('questionContainer').scrollIntoView({ behavior: 'smooth' });
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        saveResponses();
        renderQuestion();
        document.getElementById('questionContainer').scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// CALCUL DES RÉSULTATS
// ============================================

function calculateResults() {
    const results = {
        totalScore: 0,
        categoryScores: {},
        allAnswered: true
    };
    
    // Initialiser les catégories
    const categories = {};
    diagnosticQuestions.forEach(q => {
        if (!categories[q.category]) {
            categories[q.category] = { sum: 0, count: 0 };
        }
    });
    
    // Calculer les scores
    diagnosticQuestions.forEach(question => {
        if (state.responses[question.id]) {
            const score = state.responses[question.id];
            results.totalScore += score;
            categories[question.category].sum += score;
            categories[question.category].count += 1;
        } else {
            results.allAnswered = false;
        }
    });
    
    // Calculer les moyennes par catégorie
    Object.keys(categories).forEach(cat => {
        results.categoryScores[cat] = Math.round(
            (categories[cat].sum / (categories[cat].count * 5)) * 100
        );
    });
    
    results.averageScore = Math.round(
        (results.totalScore / (diagnosticQuestions.length * 5)) * 100
    );
    
    return results;
}

// ============================================
// AFFICHAGE DES RÉSULTATS
// ============================================

function showResults() {
    if (!isAllAnswered()) {
        alert('Veuillez répondre à toutes les questions avant de voir vos résultats.');
        return;
    }
    
    const results = calculateResults();
    
    // Masquer les sections
    const accueilSection = document.querySelector('.accueil-section');
    const diagnosticSection = document.getElementById('diagnostic');
    const resultatsSection = document.getElementById('resultats');
    
    if (accueilSection) accueilSection.style.display = 'none';
    if (diagnosticSection) diagnosticSection.style.display = 'none';
    if (resultatsSection) resultatsSection.style.display = 'flex';
    
    // Afficher le score global
    const globalScore = document.getElementById('globalScore');
    if (globalScore) globalScore.textContent = results.averageScore;
    
    // Description du score
    const description = getScoreDescription(results.averageScore);
    const scoreDesc = document.getElementById('scoreDescription');
    if (scoreDesc) scoreDesc.textContent = description;
    
    // Afficher les catégories
    renderCategoryScores(results.categoryScores);
    
    // Afficher les recommandations
    renderRecommendations(results);
    
    // Scroll vers les résultats
    if (resultatsSection) {
        resultatsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function isAllAnswered() {
    return Object.keys(state.responses).length === diagnosticQuestions.length;
}

function getScoreDescription(score) {
    if (score >= 90) return '🌟 Excellent ! Vous avez une gestion du temps exceptionnelle.';
    if (score >= 75) return '👍 Très bon ! Vous gérez bien votre temps.';
    if (score >= 60) return '📊 Moyen. Il y a place pour l\'amélioration.';
    if (score >= 45) return '⚠️ À améliorer. Vous pourriez mieux gérer votre temps.';
    return '🆘 Critique. Une intervention est nécessaire.';
}

// Afficher les scores par catégorie
function renderCategoryScores(scores) {
    const grid = document.getElementById('categoriesGrid');
    const categoryNames = {
        gestion_temps: 'Gestion du Temps',
        planification: 'Planification',
        priorites: 'Priorités',
        distractions: 'Distractions',
        repos: 'Repos',
        famille_amis: 'Famille & Amis',
        sante: 'Santé',
        developpement: 'Développement',
        satisfaction: 'Satisfaction',
        objectifs: 'Objectifs',
        productivite: 'Productivité',
        loisirs: 'Loisirs',
        travail: 'Travail',
        sommeil: 'Sommeil',
        technologie: 'Technologie',
        equilibre_vie_travail: 'Équilibre V/T',
        stress: 'Stress',
        routine: 'Routine',
        apprentissage: 'Apprentissage',
        delegation: 'Délégation',
        flexibilite: 'Flexibilité',
        concentration: 'Concentration',
        finances_temps: 'Finances Temps',
        evenements: 'Événements',
        motivation: 'Motivation',
        accomplissement: 'Accomplissement',
        reflexion: 'Réflexion',
        vision: 'Vision'
    };
    
    let html = '';
    Object.keys(scores).forEach(category => {
        const score = scores[category];
        html += `
            <div class="category-card">
                <div class="category-score">${score}%</div>
                <div class="category-name">${categoryNames[category]}</div>
            </div>
        `;
    });
    
    if (grid) grid.innerHTML = html;
}

// Afficher les recommandations
function renderRecommendations(results) {
    const recommendations = generateRecommendations(results);
    const list = document.getElementById('recommendationsList');
    
    let html = '';
    recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    if (list) list.innerHTML = html;
}

// Générer les recommandations
function generateRecommendations(results) {
    const recommendations = [];
    
    if (results.averageScore < 50) {
        recommendations.push('⏰ Commencez par établir une routine quotidienne simple');
        recommendations.push('📋 Utilisez un agenda ou un système de prise de notes');
        recommendations.push('🎯 Définissez 3 objectifs principaux pour la semaine');
    }
    
    if (results.categoryScores.priorites && results.categoryScores.priorites < 60) {
        recommendations.push('✅ Apprenez la matrice Eisenhower pour classifier vos tâches');
        recommendations.push('🔴 Identifiez les tâches urgentes vs importantes');
    }
    
    if (results.categoryScores.distractions && results.categoryScores.distractions > 60) {
        recommendations.push('📵 Mettez en place des périodes sans distractions');
        recommendations.push('📱 Limitez l\'accès aux réseaux sociaux pendant le travail');
    }
    
    if (results.categoryScores.repos && results.categoryScores.repos < 60) {
        recommendations.push('💤 Accordez-vous au moins 8 heures de sommeil par nuit');
        recommendations.push('🧘 Pratiquez la méditation ou la relaxation');
    }
    
    if (results.categoryScores.famille_amis && results.categoryScores.famille_amis < 60) {
        recommendations.push('👥 Bloquez du temps chaque semaine pour les relations');
        recommendations.push('🗓️ Programmez des appels ou des rencontres régulières');
    }
    
    if (results.categoryScores.sante && results.categoryScores.sante < 60) {
        recommendations.push('🏃 Pratiquez 30 minutes d\'activité physique quotidienne');
        recommendations.push('🥗 Maintenez une alimentation équilibrée');
    }
    
    if (results.categoryScores.developpement && results.categoryScores.developpement < 60) {
        recommendations.push('📚 Consacrez 30 minutes par jour à l\'apprentissage');
        recommendations.push('🎓 Suivez un cours en ligne ou une formation');
    }
    
    if (results.categoryScores.stress && results.categoryScores.stress < 40) {
        recommendations.push('🎯 Pratiquez des techniques de gestion du stress');
        recommendations.push('🌿 Cherchez du soutien professionnel si nécessaire');
    }
    
    if (results.categoryScores.concentration && results.categoryScores.concentration < 60) {
        recommendations.push('🎯 Utilisez la technique Pomodoro pour améliorer la concentration');
        recommendations.push('🚫 Éliminez les distractions lors des tâches importantes');
    }
    
    if (recommendations.length === 0) {
        recommendations.push('🎉 Continuez votre excellent travail !');
        recommendations.push('📈 Visez l\'amélioration constante');
    }
    
    return recommendations;
}

// ============================================
// ACTIONS DES RÉSULTATS
// ============================================

function restartDiagnostic() {
    // Réinitialiser l'état
    state.currentQuestion = 0;
    state.responses = {};
    state.showResults = false;
    
    // Réinitialiser localStorage
    localStorage.removeItem('diagnosticResponses');
    localStorage.removeItem('currentQuestion');
    
    // Afficher les sections appropriées
    const accueilSection = document.querySelector('.accueil-section');
    const diagnosticSection = document.getElementById('diagnostic');
    const resultatsSection = document.getElementById('resultats');
    
    if (accueilSection) accueilSection.style.display = 'flex';
    if (diagnosticSection) diagnosticSection.style.display = 'none';
    if (resultatsSection) resultatsSection.style.display = 'none';
    
    if (accueilSection) {
        accueilSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function downloadResults() {
    const results = calculateResults();
    const recommendations = generateRecommendations(results);
    
    // Construire le contenu HTML du PDF
    let pdfContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                * { margin: 0; padding: 0; }
                body { 
                    font-family: 'Arial', sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    background: white;
                }
                .page { 
                    page-break-after: always; 
                    padding: 40px; 
                    background: white;
                }
                .header { 
                    text-align: center; 
                    margin-bottom: 40px; 
                    border-bottom: 3px solid #6366f1; 
                    padding-bottom: 20px;
                }
                .header h1 { 
                    color: #6366f1; 
                    font-size: 28px; 
                    margin-bottom: 10px;
                }
                .header h2 { 
                    color: #666; 
                    font-size: 18px; 
                    font-weight: normal;
                }
                .score-section { 
                    text-align: center; 
                    margin: 40px 0; 
                    background: #f5f5f5; 
                    padding: 30px; 
                    border-radius: 8px;
                    border-left: 5px solid #6366f1;
                }
                .score-value { 
                    font-size: 48px; 
                    font-weight: bold; 
                    color: #6366f1; 
                    margin-bottom: 10px;
                }
                .score-description { 
                    font-size: 16px; 
                    color: #666; 
                    margin-bottom: 10px;
                }
                .section { 
                    margin: 30px 0; 
                    page-break-inside: avoid;
                }
                .section h3 { 
                    color: #6366f1; 
                    font-size: 18px; 
                    margin-bottom: 15px; 
                    border-bottom: 2px solid #6366f1; 
                    padding-bottom: 10px;
                }
                .categories { 
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 15px; 
                    margin-top: 15px;
                }
                .category-item { 
                    background: #f9f9f9; 
                    padding: 15px; 
                    border: 1px solid #ddd; 
                    border-radius: 5px; 
                    text-align: center;
                }
                .category-name { 
                    font-size: 12px; 
                    color: #666; 
                    margin-bottom: 8px; 
                    font-weight: bold;
                }
                .category-score { 
                    font-size: 24px; 
                    color: #6366f1; 
                    font-weight: bold;
                }
                .recommendations-list { 
                    list-style: none; 
                    margin-top: 15px;
                }
                .recommendations-list li { 
                    background: #f9f9f9; 
                    margin-bottom: 12px; 
                    padding: 12px 15px; 
                    border-left: 4px solid #6366f1; 
                    border-radius: 3px; 
                    font-size: 13px;
                }
                .footer { 
                    text-align: center; 
                    margin-top: 50px; 
                    padding-top: 20px; 
                    border-top: 1px solid #ddd; 
                    color: #999; 
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="page">
                <!-- En-tête -->
                <div class="header">
                    <h1>🕐 HourTime</h1>
                    <h2>Diagnostic du Temps - Résultats Personnalisés</h2>
                </div>

                <!-- Score Global -->
                <div class="score-section">
                    <div class="score-value">${results.averageScore}%</div>
                    <div class="score-description">${getScoreDescription(results.averageScore)}</div>
                </div>

                <!-- Scores par Catégorie -->
                <div class="section">
                    <h3>📊 Scores par Catégorie</h3>
                    <div class="categories">
    `;

    const categoryNames = {
        gestion_temps: 'Gestion du Temps',
        planification: 'Planification',
        priorites: 'Priorités',
        distractions: 'Distractions',
        repos: 'Repos',
        famille_amis: 'Famille & Amis',
        sante: 'Santé',
        developpement: 'Développement',
        satisfaction: 'Satisfaction',
        objectifs: 'Objectifs',
        productivite: 'Productivité',
        loisirs: 'Loisirs',
        travail: 'Travail',
        sommeil: 'Sommeil',
        technologie: 'Technologie',
        equilibre_vie_travail: 'Équilibre V/T',
        stress: 'Stress',
        routine: 'Routine',
        apprentissage: 'Apprentissage',
        delegation: 'Délégation',
        flexibilite: 'Flexibilité',
        concentration: 'Concentration',
        finances_temps: 'Finances Temps',
        evenements: 'Événements',
        motivation: 'Motivation',
        accomplissement: 'Accomplissement',
        reflexion: 'Réflexion',
        vision: 'Vision'
    };

    // Ajouter les catégories
    Object.entries(results.categoryScores).forEach(([cat, score]) => {
        pdfContent += `
            <div class="category-item">
                <div class="category-name">${categoryNames[cat] || cat}</div>
                <div class="category-score">${score}%</div>
            </div>
        `;
    });

    pdfContent += `
                    </div>
                </div>

                <!-- Recommandations -->
                <div class="section">
                    <h3>💡 Vos Recommandations Personnalisées</h3>
                    <ul class="recommendations-list">
    `;

    // Ajouter les recommandations
    recommendations.forEach(rec => {
        pdfContent += `<li>${rec}</li>`;
    });

    pdfContent += `
                    </ul>
                </div>

                <!-- Pied de page -->
                <div class="footer">
                    <p>Diagnostic généré le ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}</p>
                    <p>© 2026 HourTime - Optimisez votre relation au temps</p>
                </div>
            </div>
        </body>
        </html>
    `;

    // Créer un élément temporaire avec le contenu
    const element = document.createElement('div');
    element.innerHTML = pdfContent;

    // Options pour html2pdf
    const opt = {
        margin: 8,
        filename: 'diagnostic-hourtime.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: false, useCORS: true },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };

    // Générer le PDF
    html2pdf().set(opt).from(element).save();
}

function shareResults() {
    const results = calculateResults();
    const text = `J'ai complété le diagnostic HourTime! Mon score: ${results.averageScore}%. Découvrez votre propre diagnostic: `;
    const url = window.location.href;
    
    // Utiliser l'API Web Share si disponible
    if (navigator.share) {
        navigator.share({
            title: 'HourTime - Diagnostic du Temps',
            text: text,
            url: url
        }).catch(err => console.log('Erreur lors du partage', err));
    } else {
        // Fallback - copier dans le presse-papiers
        const shareUrl = `${text}${url}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
            alert('Lien de partage copié dans le presse-papiers!');
        });
    }
}

// ============================================
// INITIALISATION
// ============================================

function initDiagnostic() {
    console.log('Diagnostic initialisé avec 28 questions');
    loadResponses();
    
    // Afficher la section accueil par défaut
    const accueilSection = document.querySelector('.accueil-section');
    const diagnosticSection = document.getElementById('diagnostic');
    const resultatsSection = document.getElementById('resultats');
    
    if (accueilSection) accueilSection.style.display = 'flex';
    if (diagnosticSection) diagnosticSection.style.display = 'none';
    if (resultatsSection) resultatsSection.style.display = 'none';
    
    // Si on a des réponses sauvegardées
    if (Object.keys(state.responses).length > 0) {
        if (Object.keys(state.responses).length === diagnosticQuestions.length) {
            // Toutes les questions ont été répondues
            showResults();
        } else {
            // Continuer où on s'était arrêté
            if (accueilSection) accueilSection.style.display = 'none';
            if (diagnosticSection) diagnosticSection.style.display = 'flex';
            renderQuestion();
        }
    }
}

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagnostic);
} else {
    initDiagnostic();
}
