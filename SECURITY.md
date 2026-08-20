# Politique de Sécurité - HourTime Diagnostic

## 🔒 Engagement de Sécurité

La sécurité et la confidentialité de nos utilisateurs sont notre priorité absolue. Ce document décrit nos pratiques en matière de sécurité et de confidentialité.

---

## 🛡️ Principes Fondamentaux

### 1. **Pas de Collecte de Données**
- ✅ Aucune donnée personnelle n'est collectée
- ✅ Aucune information d'identification n'est stockée
- ✅ Aucun suivi utilisateur n'est effectué
- ✅ Les réponses au diagnostic restent locales

### 2. **Stockage 100% Local**
- ✅ Les données sont stockées uniquement dans `localStorage` du navigateur
- ✅ Les données ne quittent jamais votre appareil
- ✅ Aucune synchronisation avec un serveur
- ✅ Vous seul avez accès à vos données

### 3. **HTTPS Obligatoire**
- ✅ GitHub Pages utilise HTTPS par défaut
- ✅ Connexion chiffrée entre votre navigateur et le serveur
- ✅ Protection contre l'interception de données
- ✅ Certificat SSL automatique et gratuit

### 4. **Application Statique**
- ✅ Pas de serveur backend
- ✅ Pas de base de données
- ✅ Pas de scripts côté serveur
- ✅ Code entièrement public et auditable

---

## 🔐 Sécurité Technique

### LocalStorage API

**Comment vos données sont stockées :**

```javascript
// Seules ces données sont stockées localement
localStorage.setItem('diagnosticResponses', JSON.stringify(responses));
localStorage.setItem('currentQuestion', currentQuestion);
```

**Accès aux données :**
- Stockées dans `http://localhost` ou le domaine du site
- Inaccessibles par d'autres sites web
- Inaccessibles par le serveur web

### Suppression des Données

**Pour effacer vos données :**

1. Ouvrez les outils développeur (F12)
2. Allez dans l'onglet "Application"
3. Sélectionnez "Local Storage"
4. Cliquez sur le domaine
5. Supprimez les entrées `diagnosticResponses` et `currentQuestion`

**Ou utilisez le code :**
```javascript
localStorage.removeItem('diagnosticResponses');
localStorage.removeItem('currentQuestion');
```

---

## 🚫 Ce que Nous Ne Faisons PAS

❌ Ne collectons pas d'emails ou de noms  
❌ Ne trackons pas votre activité  
❌ N'utilisons pas de cookies de suivi  
❌ N'envoyons pas vos réponses à des serveurs  
❌ N'affichons pas de publicités  
❌ N'utilisons pas d'analytics  
❌ N'intégrons pas d'API externes  
❌ Ne partageons pas vos données  

---

## ✅ Ce que Nous Faisons

✅ Stockons les réponses localement  
✅ Calculons les résultats en local  
✅ Générons les PDF en local  
✅ Gardons le code simple et transparent  
✅ Offrons une expérience privée  
✅ Maintenons le code à jour  
✅ Corrigeons les vulnérabilités rapidement  
✅ Respectons la vie privée  

---

## 🔍 Transparence du Code

Notre code est **100% open source** et disponible sur GitHub :

- **Tous les fichiers sont publics** et vérifiables
- **Pas de code masqué ou obfusqué**
- **Les dépendances sont listées explicitement**
- **Vous pouvez auditer le code vous-même**

### Dépendances Externes

Seule une dépendance externe est utilisée pour l'export PDF :

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
```

Cette dépendance est utilisée **uniquement pour le téléchargement PDF** et ne collecte aucune donnée.

---

## 🌐 Sécurité GitHub Pages

### Avantages de GitHub Pages

✅ **Hébergement sécurisé** par Microsoft/GitHub  
✅ **HTTPS automatique** avec certificat SSL  
✅ **Pas de serveur à maintenir** et à sécuriser  
✅ **Mise à jour automatique** du certificat  
✅ **Protection DDoS** incluse  
✅ **Contrôle d'accès** via GitHub  

### Infrastructure de Sécurité

```
Utilisateur (HTTPS) → CDN GitHub → Serveurs GitHub Pages
   ↓
Contenu statique uniquement
Pas de données sensibles
Pas de base de données
```

---

## 📋 Conditions de Confidentialité

### Données Collectées par GitHub Pages

GitHub collecte certaines données techniques :
- Adresse IP (pour les logs serveur)
- Navigateur et système d'exploitation
- Heure d'accès

Ces données :
- Sont stockées par GitHub selon leur politique de confidentialité
- Sont utilisées pour maintenir le service
- Ne sont pas partagées avec nous
- Peuvent être supprimées en contactant GitHub

Voir [Politique de Confidentialité GitHub](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

---

## 🐛 Signalement de Vulnérabilités de Sécurité

Si vous découvrez une vulnérabilité de sécurité :

1. **NE publiez pas** la vulnérabilité publiquement
2. **Envoyez un email** à : `security@hourtime.fr`
3. **Décrivez** le problème en détail
4. **Attendez** notre réponse (48-72 heures)
5. **Nous publierons** un correctif rapidement

---

## 🔄 Mises à Jour de Sécurité

### Politique de Mise à Jour

- Nous mettrons à jour les dépendances régulièrement
- Les correctifs de sécurité seront appliqués immédiatement
- Les changements seront documentés dans les commits
- Les utilisateurs seront informés des mises à jour importantes

### Suivi des Vulnérabilités

Nous utilisons GitHub's dependabot pour :
- Détecter les vulnérabilités des dépendances
- Alerter sur les mises à jour de sécurité
- Appliquer les correctifs automatiquement

---

## 📱 Sécurité Mobile

L'application est sécurisée sur tous les appareils :

✅ **iOS (Safari)** - localStorage supporté et sécurisé  
✅ **Android (Chrome)** - localStorage supporté et sécurisé  
✅ **Desktop (tous les navigateurs)** - localStorage supporté  

Aucune donnée n'est synchronisée entre appareils (par design).

---

## 🔑 Bonnes Pratiques pour l'Utilisateur

### Comment Protéger Vos Données

1. **Utilisez un navigateur à jour**
   - Les anciens navigateurs peuvent avoir des failles

2. **Activez HTTPS seulement**
   - Utilisez https:// et non http://

3. **Videz votre cache régulièrement**
   - Empêche la réutilisation de données en cache

4. **Utilisez un navigateur privé** (optionnel)
   - Supprime automatiquement les données à la fermeture

5. **Gardez votre système à jour**
   - Mises à jour OS et navigateur importantes

---

## 📊 Audit de Sécurité

### Tests Effectués

- ✅ Vérification du code source
- ✅ Test des entrées utilisateur
- ✅ Vérification des en-têtes HTTPS
- ✅ Test du stockage local
- ✅ Vérification des dépendances
- ✅ Test de performance

### Résultats

Tous les tests de sécurité sont **passés avec succès** ✅

---

## 📞 Contact Sécurité

Pour toute question de sécurité :

- 📧 **Email** : `security@hourtime.fr`
- 🐛 **GitHub Issues** : [Signaler un bug](https://github.com/hourtimeofficiel-creator/diagnostic-du-temps/issues)
- 💬 **Discussions** : [Discussions GitHub](https://github.com/hourtimeofficiel-creator/diagnostic-du-temps/discussions)

---

## 📄 Versions de Sécurité

| Version | Date | Statut | Notes |
|---------|------|--------|-------|
| 1.0.0 | Août 2026 | ✅ Sécurisée | Version initiale |

---

## 🎯 Engagement Continu

Nous nous engageons à :

- ✅ Maintenir les normes de sécurité élevées
- ✅ Rester transparent sur les pratiques de sécurité
- ✅ Corriger rapidement les vulnérabilités
- ✅ Respecter la vie privée des utilisateurs
- ✅ Suivre les meilleures pratiques du secteur
- ✅ Maintenir le code à jour

---

## 📚 Ressources de Sécurité

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [GitHub Security](https://github.com/security)
- [MDN Web Security](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Privacy Guides](https://www.privacyguides.org/)

---

## ⚖️ Conformité Légale

Cette application respecte :

- ✅ **RGPD** - Pas de données personnelles collectées
- ✅ **CCPA** - Aucune vente de données
- ✅ **Loi Française** - Respect de la vie privée
- ✅ **Normes Internationales** - Standards de sécurité

---

**Dernière mise à jour :** Août 2026  
**Prochaine révision :** Tous les 6 mois  
**Status :** ✅ Sécurisée et Conforme

*Votre sécurité et votre confidentialité sont importantes pour nous.* 🔒
