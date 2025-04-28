# Deployment Checklist & Verification

This document outlines the steps to verify before and after deploying the Nayara CMS frontend and backend.

## Pre-requisites

- [ ] Node.js (Check version compatibility with backend/frontend)
- [ ] npm (or pnpm/yarn)
- [ ] Git
- [ ] Railway CLI installed and logged in (`railway login`)
- [ ] Vercel CLI installed and logged in (`vercel login`)

## Backend Pre-Deployment Checks (Target: Railway)

- [ ] Code branch/commit to deploy is finalized and pushed.
- [ ] All migrations have been tested locally.
- [ ] `nayara-cms-backend/.env` file contains **ALL** required variables for the target Railway environment (e.g., `NODE_ENV=production`, `DATABASE_URL` from Railway service, correct `JWT_SECRET`, `CORS_ORIGIN_PROD`, `RAILWAY_VOLUME_MOUNT_PATH`). **Do not commit `.env`!** Variables must be set via `railway variables set` or the Railway dashboard.
- [ ] Production build successful locally (`npm run build` in `nayara-cms-backend`).
- [ ] Health check endpoint (`/health`) functions correctly locally.

## Frontend Pre-Deployment Checks (Target: Vercel)

- [ ] Code branch/commit to deploy is finalized and pushed.
- [ ] `nayara-cms-frontend/.env.production` file exists (but **do not commit** if it contains secrets).
- [ ] `VITE_API_BASE_URL` environment variable is correctly set for the **production** backend URL via `vercel env add VITE_API_BASE_URL <backend_url> production` or the Vercel dashboard.
- [ ] Production build successful locally (`npm run build` in `nayara-cms-frontend`).
- [ ] All console logs and debuggers are confirmed removed from the production build (verified via `vite.config.ts` `terserOptions`).

## Basic Post-Deployment Verification (Both Platforms)

- **Backend (Railway):**
    - [ ] Deployment successful in Railway dashboard/CLI (`railway status`).
    - [ ] Check runtime logs for errors (`railway logs`).
    - [ ] Access the public Railway URL.
    - [ ] Health check endpoint (`<railway_url>/health`) returns status `ok` / 200.
    - [ ] Test basic API endpoint requiring auth (e.g., `/auth/status`) using a tool like Postman or curl.
- **Frontend (Vercel):**
    - [ ] Deployment successful in Vercel dashboard/CLI (`vercel ls`).
    - [ ] Check runtime logs for errors.
    - [ ] Access the public Vercel URL.
    - [ ] No CORS errors in the browser console.
    - [ ] Login functionality works.
    - [ ] Core feature check (e.g., Can view dashboard? Can load campaigns?).

## High-Level Rollback Strategy

1.  **Identify Failing Deployment:** Monitor logs and perform post-deployment checks immediately.
2.  **Halt Further Rollout (if applicable).**
3.  **Code Revert:** `git revert <commit_hash>` or `git checkout <last_known_good_commit>`.
4.  **Trigger Redeployment:** Push the reverted code. Railway and Vercel should automatically trigger a new build based on the previous working commit.
5.  **Manual Redeploy (if needed):** Use `railway deploy` or `vercel --prod` flags if auto-deploy doesn't trigger.
6.  **Verify Rollback:** Repeat post-deployment verification steps on the rolled-back version.

*(Note: This checklist is preliminary. Task 20 involves creating more comprehensive documentation.)* 