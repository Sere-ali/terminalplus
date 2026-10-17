import { convexAuth } from "@convex-dev/auth/server"
import { Password } from "@convex-dev/auth/providers/Password"

// Inscription directe (e-mail + mot de passe), sans code de vérification par e-mail :
// beaucoup d'élèves n'ont pas d'e-mail fiable, et l'accès est protégé par le paiement Wave.
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password],
})
