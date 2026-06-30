# One Shot One Take — The Official Record

A single-page tribute site covering one man's attempt to make 10 consecutive shots on a kid-sized toy basketball hoop. Every day he films himself shooting once, opens with the catchphrase *"They say you can't make 10 in a row,"* and posts it to the group chat.

The site is built like an ESPN 30-for-30 / Olympic broadcast stat tribute. It is played completely straight.

**Current status:** 41 days in. 29 makes. 71% cumulative rate. Longest streak: 6 (reached twice — days 22–27 and 35–40). Both times, the very next shot was a miss.

## Adding a new day

Open `index.html` and append one line to the `SHOTS` array near the bottom of the `<script>` block:

```js
{ day: 42, date: "6/30/2026", result: "make", note: "" },
```

- `result` is `"make"` or `"miss"`
- `note` is optional — use `"bonus vid - make"` if there was a bonus practice video that day (the official result still goes in `result`)
- Every stat on the page — cumulative %, longest streak, current streak, the quest tracker, the sparkline — is derived from this array automatically

## Deploy on Vercel

It's a single static HTML file with no build step. In the Vercel dashboard:

1. **Import** → select the `ten-in-a-row` GitHub repo
2. **Framework preset:** Other (or leave blank)
3. **Build command:** *(leave empty)*
4. **Output directory:** *(leave empty / `.`)*
5. Click **Deploy**

Or from the CLI: `vercel --prod` (no config needed).
