# Déploiement TERMINALE+ sur Render

Architecture : un service web Node (TanStack Start) + une base PostgreSQL Render. Plus de Convex.

Variables d'environnement du service web :
- `DATABASE_URL` : URL interne de la base Render
- `SESSION_SECRET` : chaîne aléatoire (16 caractères minimum)
- `ADMIN_BOOTSTRAP_PASSWORD` : crée le compte admin « Ali » au premier démarrage (à supprimer ensuite)
- `ANTHROPIC_API_KEY` : optionnel, active le professeur IA
- `NODE_VERSION=22`

Les tables et les 147 leçons sont créées automatiquement au premier démarrage.
Paiement : l'élève envoie 1000 F par Wave, saisit la référence, l'admin valide.
