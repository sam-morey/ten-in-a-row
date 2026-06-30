/* ════════════════════════════════════════════════════════════════
   ONE SHOT ONE TAKE — THE SHOT LOG
   This is the single source of truth. Every stat on the site is
   derived from it. To add a new day, append ONE line before the
   closing `];`, bumping `day` by 1.

     result : "make" | "miss"   (the official result for that day)
     note   : ""  — or  "bonus vid - make"  for an extra practice vid
              (the note never affects the stats; only `result` does)

   Trailing commas and comments are fine. Don't renumber old days.
   ════════════════════════════════════════════════════════════════ */
const SHOTS = [
  { day:  1, date: "5/20/2026", result: "make", note: "" },
  { day:  2, date: "5/21/2026", result: "miss", note: "" },
  { day:  3, date: "5/22/2026", result: "miss", note: "" },
  { day:  4, date: "5/23/2026", result: "miss", note: "" },
  { day:  5, date: "5/24/2026", result: "miss", note: "" },
  { day:  6, date: "5/25/2026", result: "make", note: "" },
  { day:  7, date: "5/26/2026", result: "make", note: "" },
  { day:  8, date: "5/27/2026", result: "make", note: "bonus vid - make" },
  { day:  9, date: "5/28/2026", result: "miss", note: "bonus vid - make" },
  { day: 10, date: "5/29/2026", result: "make", note: "" },
  { day: 11, date: "5/30/2026", result: "make", note: "" },
  { day: 12, date: "5/31/2026", result: "make", note: "" },
  { day: 13, date: "6/1/2026",  result: "miss", note: "" },
  { day: 14, date: "6/2/2026",  result: "make", note: "" },
  { day: 15, date: "6/3/2026",  result: "make", note: "" },
  { day: 16, date: "6/4/2026",  result: "make", note: "" },
  { day: 17, date: "6/5/2026",  result: "miss", note: "" },
  { day: 18, date: "6/6/2026",  result: "miss", note: "" },
  { day: 19, date: "6/7/2026",  result: "make", note: "" },
  { day: 20, date: "6/8/2026",  result: "make", note: "" },
  { day: 21, date: "6/9/2026",  result: "miss", note: "" },
  { day: 22, date: "6/10/2026", result: "make", note: "" },
  { day: 23, date: "6/11/2026", result: "make", note: "" },
  { day: 24, date: "6/12/2026", result: "make", note: "bonus vid - make" },
  { day: 25, date: "6/13/2026", result: "make", note: "" },
  { day: 26, date: "6/14/2026", result: "make", note: "" },
  { day: 27, date: "6/15/2026", result: "make", note: "" },
  { day: 28, date: "6/16/2026", result: "miss", note: "" },
  { day: 29, date: "6/17/2026", result: "make", note: "" },
  { day: 30, date: "6/18/2026", result: "make", note: "" },
  { day: 31, date: "6/19/2026", result: "make", note: "" },
  { day: 32, date: "6/20/2026", result: "make", note: "" },
  { day: 33, date: "6/21/2026", result: "make", note: "" },
  { day: 34, date: "6/22/2026", result: "miss", note: "" },
  { day: 35, date: "6/23/2026", result: "make", note: "" },
  { day: 36, date: "6/24/2026", result: "make", note: "" },
  { day: 37, date: "6/25/2026", result: "make", note: "" },
  { day: 38, date: "6/26/2026", result: "make", note: "" },
  { day: 39, date: "6/27/2026", result: "make", note: "" },
  { day: 40, date: "6/28/2026", result: "make", note: "" },
  { day: 41, date: "6/29/2026", result: "miss", note: "" },
  // ↑ add the next day below this line, e.g.:
  // { day: 42, date: "6/30/2026", result: "make", note: "" },
];

// Lets the Node validator import this file without a build step.
// Ignored by the browser (no `module` global there).
if (typeof module !== "undefined" && module.exports) module.exports = { SHOTS };
