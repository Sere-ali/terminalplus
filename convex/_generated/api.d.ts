/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as ResendOTP from "../ResendOTP.js";
import type * as admin from "../admin.js";
import type * as auth from "../auth.js";
import type * as catalog from "../catalog.js";
import type * as content_catalogue from "../content/catalogue.js";
import type * as content_extra from "../content/extra.js";
import type * as content_extra2 from "../content/extra2.js";
import type * as content_extra3 from "../content/extra3.js";
import type * as content_francais from "../content/francais.js";
import type * as content_langues from "../content/langues.js";
import type * as content_maths1 from "../content/maths1.js";
import type * as content_maths2 from "../content/maths2.js";
import type * as content_maths3 from "../content/maths3.js";
import type * as content_philo from "../content/philo.js";
import type * as content_svt from "../content/svt.js";
import type * as http from "../http.js";
import type * as lib from "../lib.js";
import type * as llm from "../llm.js";
import type * as macaly from "../macaly.js";
import type * as progress from "../progress.js";
import type * as seed from "../seed.js";
import type * as tutor from "../tutor.js";
import type * as tutorData from "../tutorData.js";
import type * as users from "../users.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  ResendOTP: typeof ResendOTP;
  admin: typeof admin;
  auth: typeof auth;
  catalog: typeof catalog;
  "content/catalogue": typeof content_catalogue;
  "content/extra": typeof content_extra;
  "content/extra2": typeof content_extra2;
  "content/extra3": typeof content_extra3;
  "content/francais": typeof content_francais;
  "content/langues": typeof content_langues;
  "content/maths1": typeof content_maths1;
  "content/maths2": typeof content_maths2;
  "content/maths3": typeof content_maths3;
  "content/philo": typeof content_philo;
  "content/svt": typeof content_svt;
  http: typeof http;
  lib: typeof lib;
  llm: typeof llm;
  macaly: typeof macaly;
  progress: typeof progress;
  seed: typeof seed;
  tutor: typeof tutor;
  tutorData: typeof tutorData;
  users: typeof users;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
