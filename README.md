# ⏰ HourTime - Diagnostic du Temps

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-production-green.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)

## 📋 Vue d'ensemble

**HourTime Diagnostic** est une application web interactive qui aide les utilisateurs à comprendre leur relation au temps en 28 questions. Cette application fournit un diagnostic complet avec un profil temporel personnalisé, une analyse des quatre mécanismes clés, et un plan d'action sur 7 jours.

### ✨ Caractéristiques principales

- **Quiz interactif** : 28 questions réparties sur 7 profils et 4 mécanismes
- **Diagnostic personnalisé** : Identification du profil temporel dominant et secondaire
- **Analyse complète** : Évaluation des 4 mécanismes (structure, fluidité, opportunisme, ancrage)
- **Identification des voleurs de temps** : Détection des 3 principales sources de distraction
- **Plan d'action progressif** : 7 jours d'actions adaptées à chaque profil
- **Rapport PDF** : Téléchargement du diagnostic complet en PDF
- **Stockage local** : Vos données restent privées et ne quittent jamais votre navigateur
- **Design premium** : Interface élégante avec palette de couleurs sophistiquées
- **Responsive** : Fonctionne parfaitement sur tous les appareils

---

## 🚀 Démarrage rapide

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/hourtimeofficiel-creator/diagnostic-du-temps.git
   cd diagnostic-du-temps
   ```

2. **Ouvrir l'application**
   - Ouvrir directement `index.html` dans un navigateur moderne
   - Ou servir via un serveur web :
   ```bash
   # Avec Python 3
   python -m http.server 8000
   
   # Ou avec Node.js
   npx http-server
   ```

3. **Accéder à l'application**
   - Navigateur : `http://localhost:8000`

### Prérequis

- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- JavaScript activé
- Support ES6 Modules
- Pas de dépendances externes (hormis jsPDF pour l'export PDF)

---

## 📁 Structure du projet

```
diagnostic-du-temps/
├── index.html                 # Page principale
├── css/
│   └── styles.css            # Feuille de styles complète
├── js/
│   ├── app.js                # Orchestrateur principal
│   ├── questions.js          # Base de données des questions
│   ├── profiles.js           # Définition des profils et mécanismes
│   ├── scoring.js            # Logique de calcul des résultats
│   ├── storage.js            # Gestion du stockage local
│   ├── results.js            # Traitement et formatage des résultats
│   └── pdf-generator.js      # Génération des rapports PDF
├── assets/                   # Images et ressources (optionnel)
└── README.md                 # Cette documentation
```

---

## 🎯 Architecture

### Flux d'application

```
[Accueil] → [Quiz] → [Calcul] → [Résultats] → [Export PDF]
                ↓
          [Stockage Local]
```

### Modules JavaScript

#### 1. **app.js** - Orchestrateur principal
- Gère la navigation entre les pages
- Contrôle l'affichage du quiz et des résultats
- Gère les événements utilisateur
- Coordonne le stockage et le calcul des résultats

#### 2. **questions.js** - Base de données
- Contient les 28 questions du diagnostic
- Structure : `{ id, text, context, category, mechanism }`

#### 3. **profiles.js** - Profils et mécanismes
- Définit les 7 profils temporels
- Définit les 4 mécanismes
- Configure les seuils de scoring

#### 4. **scoring.js** - Logique de calcul
- Calcule les scores des mécanismes
- Identifie le profil dominant
- Génère les recommandations

#### 5. **storage.js** - Gestion du stockage
- Sauvegarde les réponses au fur et à mesure
- Restaure la progression en cas de rechargement
- Sauvegarde les résultats finaux

#### 6. **results.js** - Traitement des résultats
- Formate les résultats pour l'affichage
- Génère le plan d'action
- Prépare les données pour le PDF

#### 7. **pdf-generator.js** - Export PDF
- Génère le rapport PDF complet
- Crée un design professionnel
- Gère le téléchargement

---

## 🎨 Design et couleurs

### Palette de couleurs

```
Noir charbon        #0D0D0F   (Fond, en-têtes)
Or satiné          #C9A45C   (Accent principal)
Or clair           #E2C681   (Surbrillance)
Taupe              #F2EBDD   (Fond secondaire)
Crème              #FEFDFB   (Fond principal)
Bordeaux           #7F1725   (Accents forts)
Gris taupe         #B4B5AE   (Texte secondaire)
```

### Responsive Design

- **Desktop** (1024px+) : Pleine largeur optimisée
- **Tablette** (768px-1023px) : Layout adapté
- **Mobile** (< 768px) : Single column responsive

---

## 📊 Profils temporels

### 7 Profils identifiés

1. **Aligné** - Maîtrise totale du temps
2. **Optimiseur** - Toujours à la recherche de gains
3. **Gestionnaire** - Organisé et méthodique
4. **Flexible** - Adaptable et opportuniste
5. **Procrastinateur** - Reporte constamment
6. **Débordé** - Submergé par les tâches
7. **Nomade** - Pas de routine établie

### 4 Mécanismes

1. **Structure** : Organisation et planification
2. **Fluidité** : Adaptabilité et flexibilité
3. **Opportunisme** : Capacité à saisir les occasions
4. **Ancrage** : Stabilité et enracinement

---

## 💾 Stockage des données

### LocalStorage

L'application utilise exclusivement le `localStorage` du navigateur. Vos données restent 100% locales.

### Confidentialité

✅ **Données 100% locales** - Aucune transmission vers un serveur
✅ **Pas de cookies de suivi** - Votre vie privée est respectée
✅ **Stockage client uniquement** - Vous contrôlez vos données

---

## 🛠️ Développement

### Ajouter une nouvelle question

Éditer `js/questions.js` et ajouter une nouvelle entrée.

### Ajouter un nouveau profil

1. Éditer `js/profiles.js`
2. Configurer les seuils dans `scoring.js`

### Personnaliser les couleurs

Éditer les variables CSS dans `css/styles.css`

---

## 🔒 Sécurité

- ✅ Pas de données sensibles stockées
- ✅ Pas de connexion utilisateur requise
- ✅ Pas de serveur (décentralisé)
- ✅ HTTPS recommandé pour le déploiement

---

## 🐛 Dépannage

### Le quiz ne sauvegarde pas les réponses

Vérifier que le localStorage est activé dans le navigateur.

### Le PDF ne génère pas

Vérifier que jsPDF est chargé correctement.

### L'application est lente

Vider le cache et le localStorage.

---

## 📈 Performance

- Taille totale : ~150KB
- Temps de chargement : < 2 secondes
- Génération PDF : < 3 secondes

---

## 🤝 Contribution

Les contributions sont bienvenues ! Pour contribuer :

1. Fork le repository
2. Créer une branche (`git checkout -b feature/ma-feature`)
3. Commit vos changements
4. Push vers la branche
5. Créer une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 📞 Support et contact

- 📧 Email : contact@hourtime.fr
- 🌐 Site web : https://www.hourtime.fr
- 📱 Instagram : @hourtime.officiel

---

## 🗺️ Feuille de route

### v1.0.0 (Actuel)
- ✅ Quiz complet 28 questions
- ✅ Diagnostic des profils
- ✅ Export PDF
- ✅ Stockage local
- ✅ Responsive design

### v1.1.0 (Prochainement)
- 🔜 Mode hors ligne (PWA)
- 🔜 Export en plusieurs formats
- 🔜 Historique des diagnostics

### v2.0.0 (Futur)
- 🔜 Suivi intégré sur 7 jours
- 🔜 Communauté utilisateurs
- 🔜 Gamification

---

<div align="center">

### ⏰ Prenez le contrôle de votre temps avec HourTime

[🚀 Commencer le diagnostic](index.html) • [💬 Support](https://github.com/hourtimeofficiel-creator/diagnostic-du-temps/issues)

**Made with ❤️ by HourTime Team**

</div>
