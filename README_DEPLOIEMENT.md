# TERMINALE+ — Guide de déploiement (GitHub, Convex, Render)

Architecture : **site** (TanStack Start + React) hébergé sur **Render** · **base de données, comptes et professeur virtuel** sur **Convex** · **e-mails** via **Resend** · **IA** via **Anthropic**.

## 1. GitHub
```bash
git init && git add . && git commit -m "TERMINALE+"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/terminale-plus.git
git push -u origin main
```
(Ne publiez jamais le fichier `.env.local`.)

## 2. Convex (base de données + backend)
1. Créez un compte gratuit sur https://convex.dev.
2. Dans le dossier du projet : `npm install` puis `npx convex dev` (connexion, création du projet). Arrêtez la commande une fois le projet créé.
3. Générez les clés d'authentification : `npx @convex-dev/auth` (répondez aux questions ; elles définissent `JWT_PRIVATE_KEY` et `JWKS`).
4. Dans le tableau de bord Convex → *Settings → Environment Variables* (déploiement **production**), ajoutez :

| Variable | Valeur |
|---|---|
| `SITE_URL` | l'adresse Render du site (ex. `https://terminale-plus.onrender.com`) |
| `ADMIN_EMAIL` | **votre e-mail** : le compte créé avec cet e-mail devient super administrateur |
| `RESEND_API_KEY` | clé API Resend (voir 3) |
| `EMAIL_FROM` | `TERMINALE+ <contact@votre-domaine.com>` |
| `ANTHROPIC_API_KEY` | clé API Anthropic (voir 4) |

5. Publiez le backend : `npx convex deploy`. Notez l'URL de production (`https://xxxx.convex.cloud`).
6. Chargez les cours (une fois, puis après chaque ajout de leçons) :
```bash
npx convex run seed:run '{"serie":"D"}' --prod
npx convex run seed:run '{"serie":"C"}' --prod
npx convex run seed:run '{"serie":"A"}' --prod
```
Par défaut, les leçons modifiées à la main ne sont pas écrasées. Ajoutez `"overwrite":true` pour tout remplacer par la version du code.

## 3. Resend (codes de vérification par e-mail)
Créez un compte sur https://resend.com, une clé API et **vérifiez votre domaine** pour pouvoir écrire à tous les élèves (sans domaine vérifié, l'envoi n'est possible que vers votre propre adresse).

## 4. Anthropic (professeur virtuel)
Créez une clé sur https://console.anthropic.com et ajoutez du crédit. Le coût dépend du nombre de questions (limite de 40 questions par élève et par jour, modifiable dans `convex/tutorData.ts`).

## 5. Render (hébergement du site)
1. https://render.com → *New → Blueprint* → choisissez le dépôt GitHub (le fichier `render.yaml` est lu automatiquement) — ou *New → Web Service* avec :
   - Build : `npm ci && npm run build`
   - Start : `node .output/server/index.mjs`
2. Variable d'environnement : `VITE_CONVEX_URL` = l'URL Convex de production.
3. Déployez. Ajoutez ensuite l'adresse Render dans la variable `SITE_URL` de Convex (étape 2.4) et redéployez si besoin.
4. Nom de domaine personnalisé : *Settings → Custom Domains*.

> Offre gratuite Render : le site « s'endort » après inactivité (premier chargement lent). Pour un usage scolaire réel, prévoyez l'offre payante d'entrée.

## 6. Vérifications avant l'ouverture aux élèves
- Créer un compte avec `ADMIN_EMAIL` : l'entrée **Admin** apparaît dans le menu.
- Créer un compte élève de test, ouvrir une leçon, poser une question au professeur.
- Faire relire les résumés par un enseignant, puis publier/dépublier depuis l'espace Admin.
- Sauvegardes : Convex propose l'export des données (*Settings → Backups*).

## Ajouter ou modifier des leçons
- **Depuis le site** : Admin → Contenus par matière → Modifier (Markdown + formules LaTeX `$...$`).
- **Depuis le code** : `convex/content/*.ts`, puis `npx convex deploy` et `seed:run`.
