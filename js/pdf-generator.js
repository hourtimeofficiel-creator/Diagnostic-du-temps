/**
 * PDF-GENERATOR.JS
 * ================
 * Génération du rapport PDF premium avec jsPDF.
 * 
 * Le rapport compte 8 pages :
 * 1. Couverture
 * 2. Synthèse
 * 3. Les quatre mécanismes (graphique)
 * 4. Analyse détaillée
 * 5. Les voleurs de temps
 * 6. Les rouages prioritaires
 * 7. Plan d'action (jours 1-4)
 * 8. Plan d'action (jours 5-7) + Engagement
 * 
 * Généré entièrement dans le navigateur, aucun serveur.
 */

/**
 * INITIALISATION ET CONFIGURATION
 */
function initPdfDocument() {
  // jsPDF doit être chargé depuis CDN dans index.html
  if (typeof window.jsPDF === 'undefined') {
    throw new Error('jsPDF n\'est pas chargé. Vérifiez le CDN dans index.html.');
  }

  const { jsPDF } = window.jsPDF;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  return doc;
}

/**
 * HELPER : Formater le texte avec retour à la ligne
 */
function addWrappedText(doc, text, x, y, maxWidth, fontSize = 12, lineHeight = 7) {
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + (lines.length * lineHeight);
}

/**
 * HELPER : Ajouter une section titre
 */
function addSectionTitle(doc, title, y) {
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(201, 164, 92); // Or satiné
  doc.text(title, 15, y);
  
  // Ligne décorative
  doc.setDrawColor(201, 164, 92);
  doc.setLineWidth(0.5);
  doc.line(15, y + 3, 195, y + 3);
  
  return y + 12;
}

/**
 * HELPER : Ajouter en-tête avec logo placeholder
 */
function addHeader(doc, title) {
  // Fond noir charbon
  doc.setFillColor(13, 13, 15);
  doc.rect(0, 0, 210, 30, 'F');
  
  // Titre
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont(undefined, 'bold');
  doc.text(title, 105, 18, { align: 'center' });
}

/**
 * HELPER : Ajouter pied de page
 */
function addFooter(doc, pageNumber, totalPages) {
  doc.setTextColor(180, 181, 174);
  doc.setFontSize(9);
  doc.text(`Page ${pageNumber} / ${totalPages}`, 105, 285, { align: 'center' });
  
  // Ligne séparatrice
  doc.setDrawColor(201, 164, 92);
  doc.setLineWidth(0.3);
  doc.line(15, 282, 195, 282);
}

/**
 * PAGE 1 : COUVERTURE
 */
function addCoverPage(doc, results) {
  const profile = results.raw.primaryProfile;
  
  // Fond noir
  doc.setFillColor(13, 13, 15);
  doc.rect(0, 0, 210, 297, 'F');
  
  // Logo placeholder (texte)
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont(undefined, 'bold');
  doc.text('⏰ HourTime', 105, 40, { align: 'center' });
  
  // Titre principal
  doc.setFontSize(32);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(226, 198, 129); // Or clair
  doc.text('Le Diagnostic du Temps', 105, 80, { align: 'center' });
  
  // Sous-titre
  doc.setFontSize(14);
  doc.setTextColor(226, 198, 129);
  doc.text('Votre profil temporel personnalisé', 105, 95, { align: 'center' });
  
  // Profil principal
  doc.setFontSize(16);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(201, 164, 92);
  doc.text(profile.title, 105, 130, { align: 'center' });
  
  // Phrase signature
  doc.setFontSize(11);
  doc.setTextColor(242, 235, 221);
  const signatureLines = doc.splitTextToSize(profile.signature, 160);
  doc.text(signatureLines, 105, 145, { align: 'center' });
  
  // Indice global
  doc.setFontSize(48);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(201, 164, 92);
  doc.text(`${results.globalIndex}`, 105, 210, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setTextColor(226, 198, 129);
  doc.text('Indice global d\'alignement temporel', 105, 225, { align: 'center' });
  
  // Date
  doc.setFontSize(10);
  doc.setTextColor(180, 181, 174);
  const date = new Date(results.timestamp).toLocaleDateString('fr-FR');
  doc.text(`${date}`, 105, 250, { align: 'center' });
  
  // Baseline
  doc.setFontSize(11);
  doc.setTextColor(201, 164, 92);
  doc.setFont(undefined, 'italic');
  doc.text('Maîtriser son temps, c\'est choisir sa vie.', 105, 275, { align: 'center' });
  
  doc.addPage();
}

/**
 * PAGE 2 : SYNTHÈSE
 */
function addSynthesisPage(doc, results) {
  addHeader(doc, 'Synthèse');
  let y = 40;
  
  // Profil principal
  doc.setFontSize(14);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(201, 164, 92);
  doc.text(`Votre profil : ${results.raw.primaryProfile.title}`, 15, y);
  y += 10;
  
  // Profil secondaire si existe
  if (results.raw.secondaryProfile) {
    doc.setFontSize(11);
    doc.setTextColor(180, 181, 174);
    doc.text(`Profil secondaire : ${results.raw.secondaryProfile.title}`, 15, y);
    y += 10;
  }
  
  // Indice global
  doc.setFontSize(11);
  doc.setTextColor(242, 235, 221);
  doc.text(`Indice global : ${results.globalIndex}/100`, 15, y);
  y += 12;
  
  // Phrase signature
  doc.setFontSize(12);
  doc.setFont(undefined, 'italic');
  doc.setTextColor(226, 198, 129);
  const signLines = doc.splitTextToSize(results.raw.primaryProfile.signature, 180);
  y = addWrappedText(doc, results.raw.primaryProfile.signature, 15, y, 180, 12, 8);
  y += 5;
  
  // Description courte
  doc.setFontSize(11);
  doc.setTextColor(242, 235, 221);
  y = addWrappedText(doc, results.raw.primaryProfile.shortDescription, 15, y, 180, 11, 7);
  y += 10;
  
  // Conseil central
  doc.setFillColor(127, 23, 37);
  doc.rect(15, y, 180, 40, 'F');
  
  doc.setTextColor(226, 198, 129);
  doc.setFontSize(10);
  doc.setFont(undefined, 'bold');
  doc.text('Conseil central', 20, y + 5);
  
  doc.setTextColor(242, 235, 221);
  doc.setFontSize(10);
  doc.setFont(undefined, 'normal');
  const adviceLines = doc.splitTextToSize(results.raw.primaryProfile.centralAdvice, 170);
  doc.text(adviceLines, 20, y + 12);
  
  addFooter(doc, 2, 8);
  doc.addPage();
}

/**
 * PAGE 3 : LES QUATRE MÉCANISMES
 */
function addMechanismsPage(doc, results) {
  addHeader(doc, 'Les quatre mécanismes');
  let y = 40;
  
  const mechanisms = ['comprendre', 'organiser', 'protéger', 'agir'];
  const scores = results.mechanismScores;
  const interpretations = results.mechanismInterpretations;
  
  mechanisms.forEach(mech => {
    const score = scores[mech];
    const interp = interpretations[mech];
    
    // Titre du mécanisme
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text(`${mech.charAt(0).toUpperCase() + mech.slice(1)}`, 15, y);
    
    // Score numérique
    doc.setTextColor(226, 198, 129);
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text(`${score}/100`, 180, y, { align: 'right' });
    
    y += 8;
    
    // Barre de progression
    doc.setDrawColor(201, 164, 92);
    doc.setLineWidth(0.5);
    doc.rect(15, y, 150, 4);
    
    const fillWidth = (score / 100) * 150;
    doc.setFillColor(201, 164, 92);
    doc.rect(15, y, fillWidth, 4, 'F');
    
    y += 8;
    
    // Niveau
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(180, 181, 174);
    doc.text(interp.level, 15, y);
    
    y += 6;
    
    // Interprétation
    doc.setFontSize(10);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, interp.interpretation, 15, y, 180, 10, 6);
    
    y += 8;
  });
  
  addFooter(doc, 3, 8);
  doc.addPage();
}

/**
 * PAGE 4 : ANALYSE DÉTAILLÉE
 */
function addAnalysisPage(doc, results) {
  addHeader(doc, 'Analyse détaillée');
  let y = 40;
  
  // Forces
  y = addSectionTitle(doc, 'Vos forces', y);
  results.strengths.forEach((strength, idx) => {
    doc.setFontSize(10);
    doc.setTextColor(226, 198, 129);
    doc.setFont(undefined, 'bold');
    doc.text(`• ${strength}`, 15, y);
    y += 7;
  });
  y += 5;
  
  // Points de vigilance
  y = addSectionTitle(doc, 'Points de vigilance', y);
  results.cautionPoints.forEach((caution) => {
    doc.setFontSize(10);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, `• ${caution}`, 15, y, 180, 10, 6);
    y += 2;
  });
  
  addFooter(doc, 4, 8);
  doc.addPage();
}

/**
 * PAGE 5 : LES VOLEURS DE TEMPS
 */
function addThievesPage(doc, results) {
  addHeader(doc, 'Les trois voleurs de temps dominants');
  let y = 40;
  
  results.thieves.forEach((thief, idx) => {
    // Titre du voleur
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text(`${idx + 1}. ${thief.name}`, 15, y);
    y += 7;
    
    // Explication
    doc.setFontSize(10);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, thief.explanation, 15, y, 180, 10, 6);
    y += 3;
    
    // Signe observable
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(180, 181, 174);
    doc.text('Signe observable :', 15, y);
    y += 4;
    y = addWrappedText(doc, thief.observableSign, 20, y, 175, 9, 5);
    y += 3;
    
    // Première action
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(226, 198, 129);
    doc.text('Première action :', 15, y);
    y += 4;
    y = addWrappedText(doc, thief.firstAction, 20, y, 175, 9, 5);
    y += 8;
    
    if (y > 260) {
      addFooter(doc, 5, 8);
      doc.addPage();
      y = 40;
    }
  });
  
  addFooter(doc, 5, 8);
  doc.addPage();
}

/**
 * PAGE 6 : ROUAGES PRIORITAIRES
 */
function addGearsPage(doc, results) {
  addHeader(doc, 'Les rouages prioritaires');
  let y = 40;
  
  results.gears.forEach((gear, idx) => {
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text(`${gear.id}. ${gear.title}`, 15, y);
    y += 6;
    
    doc.setFontSize(9);
    doc.setTextColor(180, 181, 174);
    doc.text(`Mécanisme : ${gear.mechanism}`, 20, y);
    y += 4;
    
    doc.setFontSize(10);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, gear.shortDescription, 15, y, 180, 10, 6);
    y += 2;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'italic');
    doc.setTextColor(226, 198, 129);
    doc.text('Première action :', 15, y);
    y += 4;
    y = addWrappedText(doc, gear.action, 20, y, 175, 9, 5);
    y += 6;
    
    if (y > 260) {
      addFooter(doc, 6, 8);
      doc.addPage();
      y = 40;
    }
  });
  
  addFooter(doc, 6, 8);
  doc.addPage();
}

/**
 * PAGE 7 : PLAN D'ACTION (JOURS 1-4)
 */
function addActionPlanPage1(doc, results) {
  addHeader(doc, 'Votre plan d\'action - Semaine 1');
  let y = 40;
  
  const plan = results.actionPlan.slice(0, 4);
  
  plan.forEach((day) => {
    // En-tête du jour
    doc.setFillColor(127, 23, 37);
    doc.rect(15, y, 180, 8, 'F');
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(226, 198, 129);
    doc.text(`Jour ${day.day} : ${day.title}`, 18, y + 5);
    
    y += 10;
    
    // Intention
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text('Intention', 15, y);
    y += 4;
    
    doc.setFontSize(9);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, day.intention, 20, y, 175, 9, 5);
    y += 2;
    
    // Action
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text('Action (10-20 min)', 15, y);
    y += 4;
    
    doc.setFontSize(9);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, day.action, 20, y, 175, 9, 5);
    y += 2;
    
    // Réflexion
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text('Réflexion', 15, y);
    y += 4;
    
    doc.setFontSize(9);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, `« ${day.reflection} »`, 20, y, 175, 9, 5);
    
    y += 6;
    
    // Case à cocher
    doc.setDrawColor(201, 164, 92);
    doc.rect(15, y, 4, 4);
    doc.setFontSize(9);
    doc.setTextColor(180, 181, 174);
    doc.text('J\'ai complété cette journée', 22, y + 3);
    
    y += 10;
  });
  
  addFooter(doc, 7, 8);
  doc.addPage();
}

/**
 * PAGE 8 : PLAN D'ACTION (JOURS 5-7) + ENGAGEMENT
 */
function addActionPlanPage2(doc, results) {
  addHeader(doc, 'Votre plan d\'action - Semaine 1 (suite)');
  let y = 40;
  
  const plan = results.actionPlan.slice(4, 7);
  
  plan.forEach((day) => {
    doc.setFillColor(127, 23, 37);
    doc.rect(15, y, 180, 8, 'F');
    
    doc.setFontSize(11);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(226, 198, 129);
    doc.text(`Jour ${day.day} : ${day.title}`, 18, y + 5);
    
    y += 10;
    
    doc.setFontSize(9);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(201, 164, 92);
    doc.text('Action', 15, y);
    y += 4;
    
    doc.setFontSize(9);
    doc.setTextColor(242, 235, 221);
    y = addWrappedText(doc, day.action, 20, y, 175, 9, 5);
    y += 4;
    
    doc.setDrawColor(201, 164, 92);
    doc.rect(15, y, 4, 4);
    doc.setFontSize(9);
    doc.setTextColor(180, 181, 174);
    doc.text('J\'ai complété cette journée', 22, y + 3);
    
    y += 10;
  });
  
  y += 10;
  
  // Zone d'engagement
  doc.setFillColor(13, 13, 15);
  doc.rect(15, y, 180, 50, 'F');
  
  doc.setFontSize(11);
  doc.setFont(undefined, 'bold');
  doc.setTextColor(226, 198, 129);
  doc.text('Mon engagement personnel', 18, y + 7);
  
  doc.setFontSize(9);
  doc.setTextColor(180, 181, 174);
  doc.text('Je m\'engage à respecter ce plan et à prendre soin de mon temps.', 18, y + 16);
  doc.text('Signature : ________________________     Date : _______________', 18, y + 30);
  
  y += 55;
  
  // Baseline final
  doc.setFontSize(10);
  doc.setFont(undefined, 'italic');
  doc.setTextColor(201, 164, 92);
  doc.text('Être à l\'ère du temps, à l\'heure de sa destinée.', 105, y, { align: 'center' });
  
  addFooter(doc, 8, 8);
}

/**
 * FONCTION PRINCIPALE : GÉNÉRER LE PDF
 */
export function generatePDF(results) {
  try {
    const doc = initPdfDocument();
    
    // Ajouter les 8 pages
    addCoverPage(doc, results);
    addSynthesisPage(doc, results);
    addMechanismsPage(doc, results);
    addAnalysisPage(doc, results);
    addThievesPage(doc, results);
    addGearsPage(doc, results);
    addActionPlanPage1(doc, results);
    addActionPlanPage2(doc, results);
    
    // Générer le nom du fichier
    const date = new Date(results.timestamp);
    const dateStr = date.toISOString().split('T')[0];
    const filename = `Diagnostic-du-Temps-HourTime-${dateStr}.pdf`;
    
    // Télécharger
    doc.save(filename);
    
    return { success: true, filename };
  } catch (error) {
    console.error('Erreur lors de la génération du PDF:', error);
    return { success: false, error: error.message };
  }
}

/**
 * AFFICHAGE D'UN MESSAGE LORS DE LA GÉNÉRATION
 */
export function showPdfGenerationIndicator() {
  const indicator = document.createElement('div');
  indicator.id = 'pdf-generation-indicator';
  indicator.innerHTML = 'Création de votre rapport en cours…';
  indicator.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #0D0D0F;
    color: #E2C681;
    padding: 30px 60px;
    border-radius: 8px;
    z-index: 9999;
    font-size: 16px;
    border: 2px solid #C9A45C;
  `;
  document.body.appendChild(indicator);
  
  return {
    remove: () => {
      const el = document.getElementById('pdf-generation-indicator');
      if (el) el.remove();
    }
  };
}
