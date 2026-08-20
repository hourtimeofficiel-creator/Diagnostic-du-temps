# HourTime - Diagnostic du Temps 🕐

Une application web interactive pour évaluer votre manière d'utiliser votre temps et recevoir des recommandations personnalisées.

## 🚀 Accès Rapide

**🌐 [Lancer le diagnostic directement](https://hourtimeofficiel-creator.github.io/diagnostic-du-temps/)**

Aucune installation requise ! Ouvrez simplement le lien ci-dessus dans votre navigateur.

---

## 📋 Caractéristiques

✅ **Diagnostic Complet** - 10 questions pertinentes sur votre gestion du temps  
✅ **Résultats Instantanés** - Analyse personnalisée de votre profil  
✅ **Recommandations** - Conseils adaptés à vos résultats  
✅ **Stockage Local** - Vos réponses sont sauvegardées automatiquement  
✅ **Responsive** - Fonctionne sur ordinateur, tablette et mobile  
✅ **Téléchargement PDF** - Exportez vos résultats en PDF  
✅ **Partage** - Partez vos résultats avec vos amis  

---

## 📊 Comment ça Marche ?

### 1️⃣ **Commencez le Diagnostic**
Cliquez sur le bouton "Commencer le Diagnostic" sur la page d'accueil.

### 2️⃣ **Répondez aux Questions**
Répondez honnêtement aux 10 questions sur :
- Gestion du temps
- Planification
- Priorités
- Distractions
- Repos & Détente
- Relations (famille/amis)
- Santé
- Développement personnel
- Satisfaction
- Objectifs

### 3️⃣ **Obtenez vos Résultats**
Recevez :
- 📈 Un score global de 0 à 100%
- 📊 Des scores par catégorie
- 💡 Recommandations personnalisées
- 📄 Options pour télécharger ou partager

---

## 🛠️ Structure du Projet

```
diagnostic-du-temps/
├── index.html              # Page HTML principale
├── homepage.html           # Page d'accueil alternative
├── styles.css              # Styles CSS
├── diagnostic.js           # Logique du diagnostic
├── README.md               # Ce fichier
├── SECURITY.md             # Politique de sécurité
├── CODE_OF_CONDUCT.md      # Code de conduite
└── .gitignore              # Fichiers à ignorer
```

---

## 🎨 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne et responsive
- **JavaScript (ES6+)** - Logique interactive
- **LocalStorage API** - Persistance des données
- **html2pdf.js** - Génération de PDF

---

## 💾 Stockage Local

Vos réponses sont automatiquement sauvegardées dans le stockage local de votre navigateur :
- Les données restent **privées** sur votre appareil
- Vous pouvez **continuer plus tard** sans perdre votre progression
- Aucune donnée n'est envoyée à un serveur

**Pour effacer vos données :**
1. Ouvrez les outils développeur (F12)
2. Allez dans Application → LocalStorage
3. Supprimez les entrées `diagnosticResponses` et `currentQuestion`

---

## 📱 Compatibilité

| Navigateur | Desktop | Mobile |
|-----------|---------|--------|
| Chrome    | ✅      | ✅     |
| Firefox   | ✅      | ✅     |
| Safari    | ✅      | ✅     |
| Edge      | ✅      | ✅     |

**Recommandation :** Utilisez un navigateur moderne (version 2020+) pour la meilleure expérience.

---

## 🚀 Déploiement sur GitHub Pages

Ce projet est automatiquement déployé sur GitHub Pages via la branche `main`.

### Configuration

1. **Accédez aux paramètres du repository**
2. Allez à **Pages** dans le menu de gauche
3. Sélectionnez **main** comme source
4. L'application sera disponible à : `https://hourtimeofficiel-creator.github.io/diagnostic-du-temps/`

### Mise à jour

Toute modification sur la branche `main` est automatiquement publiée (peut prendre quelques minutes).

---

## 📈 Interprétation des Résultats

| Score | Interprétation | Action |
|-------|----------------|--------|
| 90-100% | 🌟 Excellent | Continuez votre excellent travail ! |
| 75-89% | 👍 Très Bon | Maintenez cet équilibre |
| 60-74% | 📊 Moyen | Il y a place pour l'amélioration |
| 45-59% | ⚠️ À Améliorer | Des changements sont nécessaires |
| < 45% | 🆘 Critique | Une intervention est urgente |

---

## 💡 Recommandations Automatiques

L'application génère des recommandations personnalisées basées sur :

- **Scores faibles** en gestion du temps → Conseils de base
- **Scores faibles** en priorités → Matrice d'Eisenhower
- **Scores hauts** en distractions → Limiter les perturbations
- **Scores faibles** en repos → Importance du sommeil
- Et bien d'autres...

---

## 🔒 Sécurité & Confidentialité

- ✅ **Aucune donnée collectée** - Tout est local
- ✅ **Aucun suivi** - Pas d'analytics
- ✅ **Aucune publicité** - Expérience pure
- ✅ **HTTPS** - Connexion sécurisée sur GitHub Pages
- ✅ **Open Source** - Code visible et vérifiable

Voir [SECURITY.md](SECURITY.md) pour plus de détails.

---

## 📝 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🤝 Contribution

Les contributions sont bienvenues ! 

### Comment contribuer :

1. **Fork** le repository
2. Créez une **branche feature** (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos modifications (`git commit -m 'Add some AmazingFeature'`)
4. **Poussez** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une **Pull Request**

---

## 📞 Support & Contact

- 📧 **Email** : `contact@hourtime.fr`
- 🐛 **Signaler un bug** : [Issues](https://github.com/hourtimeofficiel-creator/diagnostic-du-temps/issues)
- 💬 **Discussions** : [Discussions](https://github.com/hourtimeofficiel-creator/diagnostic-du-temps/discussions)
- 🔒 **Sécurité** : `security@hourtime.fr`

---

## 🎯 Roadmap

### Version 1.0 (Actuelle)
- ✅ Diagnostic de base (10 questions)
- ✅ Résultats instantanés
- ✅ Recommandations personnalisées
- ✅ Export PDF
- ✅ Partage

### Version 2.0 (Prévue)
- 📅 Diagnostic complet (28 questions)
- 📊 Graphiques avancés
- 🔐 Compte utilisateur (optionnel)
- 💾 Historique des résultats
- 🎯 Plan d'action personnalisé

### Version 3.0 (Futur)
- 📱 Application mobile
- 🤖 IA pour recommandations avancées
- 👥 Comparaison avec d'autres utilisateurs
- 📈 Suivi des progrès
- 🎓 Modules de formation

---

## 📚 Ressources Utiles

- [OWASP - Gestion du Temps](https://owasp.org/)
- [Matrice d'Eisenhower](https://www.eisenhower.me/)
- [GTD - Getting Things Done](https://gettingthingsdone.com/)
- [Pomodoro Technique](https://www.pomodorotechnique.com/)

---

## 🙏 Remerciements

Merci à tous ceux qui ont contribué à ce projet et à la communauté HourTime.

---

## 📄 Fichiers Importants

- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) - Code de conduite communautaire
- [SECURITY.md](SECURITY.md) - Politique de sécurité
- [LICENSE](LICENSE) - Licence MIT

---

## 🎉 Commencez Maintenant

**[Lancer le diagnostic →](https://hourtimeofficiel-creator.github.io/diagnostic-du-temps/)**

---

**Dernière mise à jour :** Août 2026  
**Version :** 1.0  
**Auteur :** HourTime Team

*Évaluez votre temps, transformez votre vie ! ⏱️*
