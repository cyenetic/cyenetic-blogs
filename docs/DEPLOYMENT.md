# Cloudflare Pages Deployment

## Will It Work? ✅ YES

If you have these 3 secrets set in GitHub:
- ✅ `CLOUDFLARE_ACCOUNT_ID`
- ✅ `CLOUDFLARE_API_TOKEN`
- ✅ `CLOUDFLARE_PROJECT_NAME`

**Then when you push to `main`, it will automatically build and deploy to Cloudflare Pages.**

No additional setup needed.

---

## What Happens

```
git push origin main
        ↓
GitHub Actions triggers
        ↓
npm ci + npm run build (creates dist/)
        ↓
Build succeeds?
        ├─ YES → Deploy to Cloudflare Pages
        │        └─ Site LIVE in 3-6 minutes
        └─ NO  → Build fails, no deploy
```

---

## Potential Problems & Solutions

### Problem 1: "Project not found" error
**Cause**: `CLOUDFLARE_PROJECT_NAME` doesn't match your Cloudflare project name exactly (case-sensitive)

**Fix**: 
1. Go to Cloudflare → Pages → Your project
2. Copy the exact project name
3. Update `CLOUDFLARE_PROJECT_NAME` in GitHub secrets
4. Push again

### Problem 2: "Invalid API token" error
**Cause**: API token expired or has wrong permissions

**Fix**:
1. Go to Cloudflare → Account → API Tokens
2. Generate new token with these permissions:
   - Read: Accounts
   - Write: Cloudflare Pages
3. Update `CLOUDFLARE_API_TOKEN` in GitHub secrets
4. Push again

### Problem 3: Wrong `CLOUDFLARE_ACCOUNT_ID`
**Cause**: Account ID is incorrect

**Fix**:
1. Cloudflare → Account Settings → Account ID (bottom right)
2. Copy exact ID
3. Update `CLOUDFLARE_ACCOUNT_ID` in GitHub secrets
4. Push again

### Problem 4: Build fails in GitHub Actions but works locally
**Cause**: Dependencies not matching

**Fix**:
```bash
# Make sure you have this locally
npm ci
npm run build

# Commit any changes
git add package-lock.json
git commit -m "update dependencies"
git push origin main
```

### Problem 5: Site doesn't update after deployment
**Cause**: Browser/CDN cache

**Fix**: 
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Wait 5-30 minutes for CDN cache to clear

---

## How to Verify It Works

1. **Make a small test change**
   ```bash
   echo "<!-- test -->" >> src/pages/index.astro
   ```

2. **Push**
   ```bash
   git add .
   git commit -m "test deployment"
   git push origin main
   ```

3. **Check GitHub Actions**
   - Go to repo → Actions tab
   - Watch workflow run (2-5 minutes)
   - Should see ✅ success

4. **Check Cloudflare Pages**
   - Dashboard → Pages → Your project → Deployments
   - Should show new deployment with status: Success

5. **Check live site**
   - Visit your domain
   - Should see the test comment in HTML source (or your changes visible)

---

## Files You Need

```
.github/workflows/deploy.yml       ← Auto-deploy on push
.github/workflows/build-check.yml  ← PR checks
wrangler.toml                      ← Cloudflare config
```

All are already created and ready.

---

## Quick Checklist Before Push

- [ ] 3 GitHub secrets are set (Account ID, API Token, Project Name)
- [ ] Project name in secrets matches Cloudflare exactly
- [ ] API token is valid and not expired
- [ ] Local `npm run build` works without errors
- [ ] Ready to deploy

If all checked, you're good to go! 🚀

---

## That's It

Push to main and watch it deploy automatically. If you hit any errors, check the GitHub Actions logs or Cloudflare deployment status for the exact error message.
