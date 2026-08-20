# Contribuer à HourTime Diagnostic

Merci de votre intérêt pour contribuer à HourTime Diagnostic ! Ce document fournit des directives et des instructions pour contribuer au projet.

## 📋 Table des matières

- [Code de conduite](#code-de-conduite)
- [Comment contribuer](#comment-contribuer)
- [Processus de contribution](#processus-de-contribution)
- [Guidelines de code](#guidelines-de-code)
- [Tests](#tests)
- [Documentation](#documentation)
- [Commit messages](#commit-messages)
- [Pull requests](#pull-requests)
- [Signaler des bugs](#signaler-des-bugs)
- [Suggérer des améliorations](#suggérer-des-améliorations)

---

## Code de conduite

### Notre engagement

Nous nous engageons à fournir un environnement accueillant et inclusif pour tous, indépendamment de l'âge, du corps, du handicap, de l'ethnicité, de l'identité de genre, du niveau d'expérience, de la nationalité, de l'apparence personnelle, de la race, de la religion ou de l'identité et de l'orientation sexuelle.

### Nos normes

Les exemples de comportement qui contribuent à créer un environnement positif incluent :

- Utiliser un langage accueillant et inclusif
- Être respectueux des points de vue et des expériences différents
- Accepter les critiques constructives avec grâce
- Se concentrer sur ce qui est mieux pour la communauté
- Montrer de l'empathie envers les autres membres de la communauté

### Application

Les cas de comportement abusif, d'harcèlement ou inacceptable peuvent être signalés en contactant l'équipe du projet à contact@hourtime.fr. Toutes les plaintes seront examinées et investigées promptement et équitablement.

---

## Comment contribuer

Il existe plusieurs façons de contribuer à HourTime Diagnostic :

### 1. **Signaler des bugs**
Si vous trouvez un bug, créez une issue GitHub avec une description détaillée.

### 2. **Suggérer des améliorations**
Avez-vous une idée pour améliorer l'application ? Créez une issue de discussion.

### 3. **Soumettre du code**
Vous pouvez contribuer directement au code en soumettant une pull request.

### 4. **Améliorer la documentation**
La documentation est tout aussi importante que le code.

### 5. **Tester l'application**
Testez l'application et signalez tout problème ou comportement inattendu.

---

## Processus de contribution

### Étape 1 : Fork le repository

```bash
# Allez sur GitHub et cliquez sur le bouton "Fork"
# Puis clonez votre fork en local
git clone https://github.com/votre-username/diagnostic-du-temps.git
cd diagnostic-du-temps
```

### Étape 2 : Créer une branche

```bash
# Créez une branche pour votre feature ou bugfix
git checkout -b feature/ma-nouvelle-feature
# ou
git checkout -b fix/mon-bugfix
```

### Étape 3 : Faire vos changements

```bash
# Modifiez les fichiers nécessaires
# Testez vos changements
# Committez vos changements (voir Commit messages)
```

### Étape 4 : Push vers votre fork

```bash
git push origin feature/ma-nouvelle-feature
```

### Étape 5 : Créer une Pull Request

1. Allez sur le repository original
2. Cliquez sur "New Pull Request"
3. Sélectionnez votre branche
4. Remplissez le template de PR
5. Cliquez sur "Create Pull Request"

### Étape 6 : Attendre la revue

Les mainteneurs vont réviser votre PR et vous faire un retour. Soyez prêt à faire des modifications si nécessaire.

---

## Guidelines de code

### Style de code

- **Indentation** : 2 espaces (pas de tabs)
- **Longueur des lignes** : Maximum 100 caractères
- **Noms de variables** : camelCase
- **Noms de classes** : PascalCase
- **Noms de constantes** : UPPER_SNAKE_CASE

### JavaScript

```javascript
// ✅ BON
const calculateScore = (answers) => {
  let totalScore = 0;
  answers.forEach((answer) => {
    totalScore += answer.value;
  });
  return totalScore;
};

// ❌ MAUVAIS
const calculateScore=(answers)=>{let totalScore=0;answers.forEach((answer)=>{totalScore+=answer.value;});return totalScore;}
```

### CSS

```css
/* ✅ BON */
.quiz-container {
  display: flex;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--color-primary);
}

/* ❌ MAUVAIS */
.quiz-container{display:flex;gap:1rem;padding:2rem;background-color:#0D0D0F;}
```

### HTML

```html
<!-- ✅ BON -->
<div class="quiz-container">
  <h1>Diagnostic du Temps</h1>
  <p>Répondez aux questions suivantes</p>
</div>

<!-- ❌ MAUVAIS -->
<DIV CLASS="QUIZ-CONTAINER"><H1>Diagnostic du Temps</H1><P>Répondez aux questions suivantes</P></DIV>
```

### Commentaires

```javascript
// Utilisez les commentaires pour expliquer le "pourquoi", pas le "quoi"

// ✅ BON
// Ajouter un délai pour éviter trop de calculs rapides
setTimeout(() => {
  calculateResults();
}, 300);

// ❌ MAUVAIS
// Attendre 300 ms
setTimeout(() => {
  calculateResults();
}, 300);
```

---

## Tests

### Avant de soumettre une PR

1. **Testez manuellement** votre feature
2. **Vérifiez** que aucun bug n'a été introduit
3. **Testez sur différents navigateurs** (Chrome, Firefox, Safari, Edge)
4. **Testez sur mobile** pour vérifier la responsivité

### Tests automatisés (futur)

Quand des tests seront en place, assurez-vous que :

```bash
# Tous les tests passent
npm test

# La couverture est acceptable
npm run test:coverage
```

---

## Documentation

### Documenter votre code

```javascript
/**
 * Calcule le score total basé sur les réponses
 * @param {Array<Object>} answers - Liste des réponses
 * @param {number} answers[].id - ID de la question
 * @param {number} answers[].score - Score de la réponse (0-5)
 * @returns {number} Score total
 * @throws {Error} Si answers n'est pas un tableau
 */
export function calculateTotalScore(answers) {
  if (!Array.isArray(answers)) {
    throw new Error('answers must be an array');
  }
  return answers.reduce((sum, answer) => sum + answer.score, 0);
}
```

### Fichier README

Si vous ajoutez une nouvelle feature majeure, mettez à jour le README.md.

### Fichier CHANGELOG

Documentez vos changements dans un commentaire de PR. Le changelog sera mis à jour par les mainteneurs.

---

## Commit messages

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat** : Une nouvelle feature
- **fix** : Un bugfix
- **docs** : Changements de documentation
- **style** : Changements de style (formatting, missing semicolons, etc.)
- **refactor** : Refactorisation du code sans changer la fonctionnalité
- **perf** : Améliorations de performance
- **test** : Ajout ou modification de tests
- **chore** : Changements des outils ou dépendances

### Exemples

```bash
# Bonne feature
git commit -m "feat(quiz): add skip question functionality"

# Bon bugfix
git commit -m "fix(storage): prevent data loss on page reload"

# Bonne documentation
git commit -m "docs(readme): add installation instructions"

# Bon style
git commit -m "style(css): fix indentation in main stylesheet"
```

### Règles

- ✅ Utilisez l'impératif ("add feature" pas "added feature")
- ✅ Ne capitalisez pas la première lettre
- ✅ N'ajoutez pas de point à la fin
- ✅ Limitez à 50 caractères
- ✅ Référencez les issues (#123)

---

## Pull requests

### Template

```markdown
## Description
Décrivez brièvement vos changements.

## Type de changement
- [ ] Bug fix
- [ ] Nouvelle feature
- [ ] Breaking change
- [ ] Documentation

## Comment a été testé?
Décrivez comment vous avez testé vos changements.

## Screenshots (si applicable)
Ajoutez des captures d'écran si pertinent.

## Checklist
- [ ] Mon code suit les guidelines du projet
- [ ] J'ai mis à jour la documentation
- [ ] J'ai testé sur différents navigateurs
- [ ] J'ai testé sur mobile
- [ ] Pas de console errors ou warnings
```

### Avant de soumettre

- ✅ Votre branche est à jour avec la branche principale
- ✅ Vous avez testé votre code
- ✅ Vous avez ajouté des commentaires si nécessaire
- ✅ Vous avez mis à jour la documentation
- ✅ Votre titre de PR est clair et descriptif
- ✅ Vous avez lié les issues pertinentes

---

## Signaler des bugs

### Format du rapport

```markdown
## Description du bug
Décrivez le bug de manière claire et concise.

## Étapes pour reproduire
1. Allez à '...'
2. Cliquez sur '...'
3. Scrollez jusqu'à '...'
4. Remarquez l'erreur

## Comportement attendu
Décrivez ce qui devrait se passer.

## Comportement actuel
Décrivez ce qui se passe réellement.

## Environnement
- Navigateur: [ex: Chrome 90]
- OS: [ex: Windows 10]
- Version de l'app: [ex: 1.0.0]

## Screenshots
Ajoutez des captures d'écran si pertinent.

## Console errors
Copiez les erreurs de la console du navigateur.
```

---

## Suggérer des améliorations

### Format

```markdown
## Description
Une description claire de l'amélioration suggérée.

## Justification
Pourquoi cette amélioration serait-elle utile?

## Cas d'usage
Décrivez un cas d'usage concret.

## Solutions alternatives
Y a-t-il d'autres façons de résoudre ce problème?
```

---

## Questions ?

Si vous avez des questions, vous pouvez :

- 📧 Contacter l'équipe : contact@hourtime.fr
- 💬 Créer une discussion sur GitHub
- 🐛 Ouvrir une issue avec le label "question"

---

## Reconnaissance

Tous les contributeurs seront reconnus dans le fichier CONTRIBUTORS.md et dans les release notes.

---

## Licence

En contribuant, vous acceptez que vos contributions soient sous licence MIT.

---

Merci encore pour votre contribution ! 🙏

**Made with ❤️ by HourTime Team**
