/* ============================================
   DIAGNOSTIC.JS - HourTime Diagnostic
   Logique complète du diagnostic interactif
   28 questions pour une analyse approfondie
   ============================================ */

// ============================================
// BASE DE DONNÉES DES QUESTIONS
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
            { text: 'Jamais - Je préfère être spontané', value: 1 },
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
    // ====== NOUVELLES QUESTIONS (11-28) ======
    {
        id: 11,
        category: 'productivite',
        question: 'Êtes-vous productif lors de vos heures de travail ?',
        options: [
            { text: 'Très peu - Beaucoup de temps perdu', value: 1 },
            { text: 'Peu - Pas toujours concentré', value: 2 },
            { text: 'Modérément - Certaines périodes sont productives', value: 3 },
            { text: 'Beaucoup - Je suis généralement efficace', value: 4 },
            { text: 'Énormément - Je suis très productif', value: 5 }
        ]
    },
    {
        id: 12,
        category: 'loisirs',
        question: 'Consacrez-vous du temps à vos loisirs et passions ?',
        options: [
            { text: 'Jamais - Je n\'ai pas le temps', value: 1 },
            { text: 'Rarement - Seulement pendant les vacances', value: 2 },
            { text: 'Parfois - Quelques fois par mois', value: 3 },
            { text: 'Souvent - Régulièrement chaque semaine', value: 4 },
            { text: 'Toujours - C\'est une part importante de ma semaine', value: 5 }
        ]
    },
    {
        id: 13,
        category: 'travail',
        question: 'Travaillez-vous en dehors de vos heures prévues ?',
        options: [
            { text: 'Oui, constamment - J\'ai du mal à déconnecter', value: 1 },
            { text: 'Souvent - Au moins 2-3 fois par semaine', value: 2 },
            { text: 'Parfois - Occasionnellement', value: 3 },
            { text: 'Rarement - Seulement en cas d\'urgence', value: 4 },
            { text: 'Jamais - Je maintiens une limite claire', value: 5 }
        ]
    },
    {
        id: 14,
        category: 'sommeil',
        question: 'Dormez-vous suffisamment chaque nuit ?',
        options: [
            { text: 'Jamais - Je dors moins de 5 heures', value: 1 },
            { text: 'Rarement - 5-6 heures généralement', value: 2 },
            { text: 'Parfois - 6-7 heures irrégulièrement', value: 3 },
            { text: 'Souvent - 7-8 heures régulièrement', value: 4 },
            { text: 'Toujours - 8+ heures et repos de qualité', value: 5 }
        ]
    },
    {
        id: 15,
        category: 'technologie',
        question: 'Comment les réseaux sociaux/techno impactent-ils votre temps ?',
        options: [
            { text: 'Très négativement - Cela me consume', value: 1 },
            { text: 'Négativement - J\'en perds trop', value: 2 },
            { text: 'Neutre - Impact modéré', value: 3 },
            { text: 'Positivement - Je les utilise bien', value: 4 },
            { text: 'Très positivement - Je les maîtrise totalement', value: 5 }
        ]
    },
    {
        id: 16,
        category: 'equilibre_vie_travail',
        question: 'Avez-vous un bon équilibre vie professionnelle-personnelle ?',
        options: [
            { text: 'Aucun - C\'est très déséquilibré', value: 1 },
            { text: 'Faible - Plutôt orienté vers le travail', value: 2 },
            { text: 'Moyen - Pas toujours équilibré', value: 3 },
            { text: 'Bon - Généralement bien équilibré', value: 4 },
            { text: 'Excellent - Parfaitement équilibré', value: 5 }
        ]
    },
    {
        id: 17,
        category: 'stress',
        question: 'Quel est votre niveau de stress quotidien ?',
        options: [
            { text: 'Extrême - Constamment débordé', value: 1 },
            { text: 'Élevé - Souvent stressé', value: 2 },
            { text: 'Modéré - Normal mais gérable', value: 3 },
            { text: 'Faible - Plutôt serein', value: 4 },
            { text: 'Très faible - Très calme', value: 5 }
        ]
    },
    {
        id: 18,
        category: 'routine',
        question: 'Avez-vous une routine matinale bien établie ?',
        options: [
            { text: 'Aucune - C\'est le chaos le matin', value: 1 },
            { text: 'Faible - Très irrégulière', value: 2 },
            { text: 'Modérée - Plutôt une routine', value: 3 },
            { text: 'Bonne - Une bonne routine', value: 4 },
            { text: 'Excellente - Très structurée et efficace', value: 5 }
        ]
    },
    {
        id: 19,
        category: 'apprentissage',
        question: 'Consacrez-vous du temps à l\'apprentissage continu ?',
        options: [
            { text: 'Jamais - Pas d\'apprentissage', value: 1 },
            { text: 'Rarement - Très occasionnel', value: 2 },
            { text: 'Parfois - Quand j\'ai du temps', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - C\'est une habitude quotidienne', value: 5 }
        ]
    },
    {
        id: 20,
        category: 'delegation',
        question: 'Déléguez-vous les tâches appropriées ?',
        options: [
            { text: 'Jamais - Je fais tout moi-même', value: 1 },
            { text: 'Rarement - Difficile pour moi', value: 2 },
            { text: 'Parfois - Quand c\'est nécessaire', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - J\'utilise bien la délégation', value: 5 }
        ]
    },
    {
        id: 21,
        category: 'flexibilite',
        question: 'Êtes-vous flexible face aux changements de plans ?',
        options: [
            { text: 'Pas du tout - Cela me stresse énormément', value: 1 },
            { text: 'Peu - J\'aime les plans rigides', value: 2 },
            { text: 'Modérément - Je peux m\'adapter', value: 3 },
            { text: 'Souvent - Assez flexible', value: 4 },
            { text: 'Toujours - Je m\'adapte très bien', value: 5 }
        ]
    },
    {
        id: 22,
        category: 'concentration',
        question: 'Pouvez-vous vous concentrer longtemps sans interruption ?',
        options: [
            { text: 'Non - Moins de 15 minutes', value: 1 },
            { text: 'Difficilement - 15-30 minutes', value: 2 },
            { text: 'Modérément - 30-60 minutes', value: 3 },
            { text: 'Oui - 1-2 heures', value: 4 },
            { text: 'Très bien - 2+ heures sans problème', value: 5 }
        ]
    },
    {
        id: 23,
        category: 'finances_temps',
        question: 'Tracez-vous comment vous dépensez votre temps ?',
        options: [
            { text: 'Jamais - Je ne sais pas où il va', value: 1 },
            { text: 'Rarement - Pas vraiment', value: 2 },
            { text: 'Parfois - Occasionnellement', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - Je suis très conscient', value: 5 }
        ]
    },
    {
        id: 24,
        category: 'evenements',
        question: 'Planifiez-vous les événements sociaux à l\'avance ?',
        options: [
            { text: 'Jamais - C\'est très spontané', value: 1 },
            { text: 'Rarement - Au dernier moment', value: 2 },
            { text: 'Parfois - Quelques jours d\'avance', value: 3 },
            { text: 'Souvent - Une ou deux semaines avant', value: 4 },
            { text: 'Toujours - Je planifie bien à l\'avance', value: 5 }
        ]
    },
    {
        id: 25,
        category: 'motivation',
        question: 'Êtes-vous motivé dans vos activités quotidiennes ?',
        options: [
            { text: 'Pas du tout - C\'est une corvée', value: 1 },
            { text: 'Peu - Manque de motivation', value: 2 },
            { text: 'Modérément - Parfois motivé', value: 3 },
            { text: 'Bien - Généralement motivé', value: 4 },
            { text: 'Très - Toujours enthousiaste', value: 5 }
        ]
    },
    {
        id: 26,
        category: 'accomplissement',
        question: 'Accomplissez-vous vos tâches avant les délais ?',
        options: [
            { text: 'Jamais - Toujours en retard', value: 1 },
            { text: 'Rarement - Souvent au dernier moment', value: 2 },
            { text: 'Parfois - Mixture de tôt et tard', value: 3 },
            { text: 'Souvent - Généralement à temps', value: 4 },
            { text: 'Toujours - Régulièrement en avance', value: 5 }
        ]
    },
    {
        id: 27,
        category: 'reflexion',
        question: 'Réfléchissez-vous à votre utilisation du temps ?',
        options: [
            { text: 'Jamais - Je n\'y pense pas', value: 1 },
            { text: 'Rarement - Très occasionnel', value: 2 },
            { text: 'Parfois - De temps en temps', value: 3 },
            { text: 'Souvent - Régulièrement', value: 4 },
            { text: 'Toujours - Je réfléchis régulièrement', value: 5 }
        ]
    },
    {
        id: 28,
        category: 'vision',
        question: 'Avez-vous une vision claire de vos priorités à long terme ?',
        options: [
            { text: 'Aucune - Je vais au jour le jour', value: 1 },
            { text: 'Floue - Une idée vague', value: 2 },
            { text: 'Partielle - Quelques idées claires', value: 3 },
            { text: 'Bonne - Une vision assez claire', value: 4 },
            { text: 'Excellente - Vision très claire et définie', value: 5 }
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

// Aller au diagnostic
function goToDiagnostic() {
    console.log('goToDiagnostic appelé');
    document.getElementById('accueil').style.display = 'none';
    document.getElementById('diagnostic').style.display = 'flex';
    document.getElementById('resultats').style.display = 'none';
    state.currentQuestion = 0;
    renderQuestion();
    document.getElementById('diagnostic').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// RENDU DES QUESTIONS
// ============================================

function renderQuestion() {
    const question = diagnosticQuestions[state.currentQuestion];
    const container = document.getElementById('questionContainer');
    
    // Construire le HTML de la question
    let html = `
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
    
    html += '</ul>';
    container.innerHTML = html;
    
    // Mettre à jour la barre de progression
    updateProgress();
    updateNavigationButtons();
}

// Enregistrer la réponse
function recordResponse(questionId, value) {
    state.responses[questionId] = value;
    saveResponses();
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
    document.getElementById('accueil').style.display = 'none';
    document.getElementById('diagnostic').style.display = 'none';
    document.getElementById('resultats').style.display = 'flex';
    
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
    document.getElementById('resultats').scrollIntoView({ behavior: 'smooth' });
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
    
    if (results.categoryScores.priorites < 60) {
        recommendations.push('✅ Apprenez la matrice Eisenhower pour classifier vos tâches');
        recommendations.push('🔴 Identifiez les tâches urgentes vs importantes');
    }
    
    if (results.categoryScores.distractions > 60) {
        recommendations.push('📵 Mettez en place des périodes sans distractions');
        recommendations.push('📱 Limitez l\'accès aux réseaux sociaux pendant le travail');
    }
    
    if (results.categoryScores.repos < 60) {
        recommendations.push('💤 Accordez-vous au moins 8 heures de sommeil par nuit');
        recommendations.push('🧘 Pratiquez la méditation ou la relaxation');
    }
    
    if (results.categoryScores.famille_amis < 60) {
        recommendations.push('👥 Bloquez du temps chaque semaine pour les relations');
        recommendations.push('🗓️ Programmez des appels ou des rencontres régulières');
    }
    
    if (results.categoryScores.sante < 60) {
        recommendations.push('🏃 Pratiquez 30 minutes d\'activité physique quotidienne');
        recommendations.push('🥗 Maintenez une alimentation équilibrée');
    }
    
    if (results.categoryScores.developpement < 60) {
        recommendations.push('📚 Consacrez 30 minutes par jour à l\'apprentissage');
        recommendations.push('🎓 Suivez un cours en ligne ou une formation');
    }
    
    if (results.categoryScores.technologie && results.categoryScores.technologie < 50) {
        recommendations.push('🔔 Activez le mode "Ne pas déranger" pendant les heures de travail');
        recommendations.push('⏱️ Utilisez des outils pour limiter le temps écran');
    }
    
    if (results.categoryScores.stress > 60) {
        recommendations.push('🧘 Pratiquez des techniques de relaxation quotidiennement');
        recommendations.push('🚶 Prenez des pauses régulières pendant la journée');
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
    document.getElementById('accueil').style.display = 'flex';
    document.getElementById('diagnostic').style.display = 'none';
    document.getElementById('resultats').style.display = 'none';
    
    document.getElementById('accueil').scrollIntoView({ behavior: 'smooth' });
}

function downloadResults() {
    const results = calculateResults();
    const content = generatePDFContent(results);
    
    // Utiliser html2pdf
    const element = document.createElement('div');
    element.innerHTML = content;
    
    const opt = {
        margin: 10,
        filename: 'diagnostic-hourtime.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
    };
    
    html2pdf().set(opt).from(element).save();
}

function generatePDFContent(results) {
    return `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h1 style="color: #6366f1; text-align: center;">HourTime - Diagnostic du Temps</h1>
            <h2 style="text-align: center;">Vos Résultats Personnalisés</h2>
            
            <h3>Score Global: ${results.averageScore}%</h3>
            <p>${getScoreDescription(results.averageScore)}</p>
            
            <h3>Scores par Catégorie:</h3>
            <ul>
                ${Object.entries(results.categoryScores).map(([cat, score]) => 
                    `<li>${cat}: ${score}%</li>`
                ).join('')}
            </ul>
            
            <h3>Recommandations:</h3>
            <ul>
                ${generateRecommendations(results).map(rec => 
                    `<li>${rec}</li>`
                ).join('')}
            </ul>
            
            <p style="margin-top: 40px; color: #999; font-size: 12px;">
                Généré le ${new Date().toLocaleDateString('fr-FR')}
            </p>
        </div>
    `;
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
    console.log('Diagnostic initialisé');
    loadResponses();
    
    // Afficher la section accueil par défaut
    document.getElementById('accueil').style.display = 'flex';
    document.getElementById('diagnostic').style.display = 'none';
    document.getElementById('resultats').style.display = 'none';
    
    // Si on a des réponses sauvegardées
    if (Object.keys(state.responses).length > 0) {
        if (Object.keys(state.responses).length === diagnosticQuestions.length) {
            // Toutes les questions ont été répondues
            showResults();
        } else {
            // Continuer où on s'était arrêté
            document.getElementById('accueil').style.display = 'none';
            document.getElementById('diagnostic').style.display = 'flex';
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
