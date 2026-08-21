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
