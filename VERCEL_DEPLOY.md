# Deploy to Vercel

## Quick Deploy Steps

### 1. Install Vercel CLI (if not already installed)
```powershell
npm i -g vercel
```

### 2. Login to Vercel
```powershell
vercel login
```

### 3. Deploy
```powershell
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time)
- Project name? Press Enter (uses `daliyupdate`)
- Directory? Press Enter (uses current `.`)
- Override settings? **N**

### 4. Set Environment Variables

After deployment, add your environment variables in the Vercel dashboard:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variable:
   - `MONGO_DB` = Your MongoDB connection string

Or set via CLI:
```powershell
vercel env add MONGO_DB
```

### 5. Redeploy (if needed after adding env vars)
```powershell
vercel --prod
```

## Important Notes

- **Express v5**: Your project uses Express 5.1.0. Vercel supports it but monitor for any compatibility issues.
- **`express-async-error` package**: This package name appears to be a typo. The correct package is `express-async-errors` (plural). If you encounter errors, consider updating it.
- **MongoDB Atlas**: Ensure your MongoDB connection string allows connections from `0.0.0.0/0` (all IPs) or add Vercel's IP addresses to your MongoDB Atlas whitelist.
- **Serverless**: Vercel runs Node.js apps as serverless functions. Long-running connections may timeout after ~10 seconds on hobby plan.

## Alternative: Git Integration

Instead of CLI, you can:
1. Push your code to GitHub/GitLab/Bitbucket
2. Import the repository in Vercel dashboard
3. Vercel will auto-deploy on every push to main branch

## Useful Commands

```powershell
# Deploy to production
vercel --prod

# Check deployment logs
vercel logs

# List deployments
vercel ls

# Remove deployment
vercel rm [deployment-url]
```
