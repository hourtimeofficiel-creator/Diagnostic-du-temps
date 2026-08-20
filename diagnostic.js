/* ============================================
   DIAGNOSTIC.JS - HourTime Diagnostic
   Logique complète du diagnostic interactif
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
    document.getElementById('accueil').scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
        document.getElementById('diagnostic').scrollIntoView({ behavior: 'smooth' });
    }, 100);
    renderQuestion();
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
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = state.currentQuestion + 1;
    document.getElementById('totalQuestions').textContent = diagnosticQuestions.length;
}

// Mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Afficher/masquer le bouton précédent
    prevBtn.style.display = state.currentQuestion > 0 ? 'inline-flex' : 'none';
    
    // Changer le texte du bouton suivant
    if (state.currentQuestion === diagnosticQuestions.length - 1) {
        nextBtn.textContent = 'Voir les résultats ✓';
    } else {
        nextBtn.textContent = 'Suivant →';
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
    
    // Masquer la section diagnostic
    document.getElementById('diagnostic').style.display = 'none';
    document.getElementById('accueil').style.display = 'none';
    
    // Afficher la section résultats
    document.getElementById('resultats').style.display = 'flex';
    
    // Afficher le score global
    const globalScore = document.getElementById('globalScore');
    globalScore.textContent = results.averageScore;
    
    // Description du score
    const description = getScoreDescription(results.averageScore);
    document.getElementById('scoreDescription').textContent = description;
    
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
        objectifs: 'Objectifs'
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
    
    grid.innerHTML = html;
}

// Afficher les recommandations
function renderRecommendations(results) {
    const recommendations = generateRecommendations(results);
    const list = document.getElementById('recommendationsList');
    
    let html = '';
    recommendations.forEach(rec => {
        html += `<li>${rec}</li>`;
    });
    
    list.innerHTML = html;
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
    document.getElementById('diagnostic').style.display = 'flex';
    document.getElementById('accueil').style.display = 'flex';
    document.getElementById('resultats').style.display = 'none';
    
    // Réinitialiser et afficher la première question
    renderQuestion();
    document.getElementById('diagnostic').scrollIntoView({ behavior: 'smooth' });
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

document.addEventListener('DOMContentLoaded', () => {
    loadResponses();
    
    // Si on a des réponses sauvegardées, aller à la dernière question
    if (Object.keys(state.responses).length > 0) {
        if (Object.keys(state.responses).length === diagnosticQuestions.length) {
            // Toutes les questions ont été répondues
            showResults();
        } else {
            // Continuer où on s'était arrêté
            renderQuestion();
        }
    } else {
        // Première visite
        renderQuestion();
    }
});
