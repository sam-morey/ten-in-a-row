# One Shot One Take — The Official Record

A single-page tribute site covering one man's attempt to make 10 consecutive shots on a kid-sized toy basketball hoop. Every day he films himself shooting once, opens with the catchphrase *"They say you can't make 10 in a row,"* and posts it to the group chat.

The site is built like an ESPN 30-for-30 / Olympic broadcast stat tribute. It is played completely straight.

**Current status:** 41 days in. 29 makes. 71% cumulative rate. Longest streak: 6 (reached twice — days 22–27 and 35–40). Both times, the very next shot was a miss.

## Adding a new day (from your phone, in ~20 seconds)

The shot log lives in one small file, [`shots.js`](shots.js) — it's the **only**
file you edit day to day. Everything else derives from it.

1. On your phone, open [`shots.js`](shots.js) on github.com and tap the **pencil** (Edit) icon.
2. Append **one line** just before the closing `];`, bumping `day` by 1:
   ```js
   { day: 42, date: "6/30/2026", result: "make", note: "" },
   ```
3. Tap **Commit changes** (commit straight to `main`).
4. Vercel redeploys automatically in ~30–60s. The site updates itself.

Notes:
- `result` is `"make"` or `"miss"`.
- `note` is optional — use `"bonus vid - make"` for a bonus practice video that day (the official result still goes in `result`).
- Don't renumber old days; just add the next one at the end.
- Every stat — cumulative %, longest streak, current streak, quest tracker, sparkline — is recomputed from this file automatically.

### The typo guardrail

On every push, a GitHub Action runs [`scripts/validate-shots.js`](scripts/validate-shots.js),
which checks the log for a valid result, sequential day numbers (no gaps or
duplicates), and a real, non-going-backwards date.

- If your edit is malformed, the commit gets a **red ✗** (visible in the GitHub
  mobile app) and GitHub **emails you** — that's your signal to fix the line.
- As a second safety net, if bad data ever reaches the live site, the page shows
  a red error banner instead of rendering wrong numbers.

To check the data locally before pushing: `node scripts/validate-shots.js`

## Deploy on Vercel

It's a single static HTML file with no build step. In the Vercel dashboard:

1. **Import** → select the `ten-in-a-row` GitHub repo
2. **Framework preset:** Other (or leave blank)
3. **Build command:** *(leave empty)*
4. **Output directory:** *(leave empty / `.`)*
5. Click **Deploy**

Or from the CLI: `vercel --prod` (no config needed).
