# Adding a project

The home page is built from `projects.js`. Adding a project takes five steps
and never means editing the home page itself.

## The five steps

1. **Copy the template.** Copy `projects/_template/` to `projects/<id>/`, where `<id>` is
   a short lowercase name with no spaces (for example `floodvic`).
2. **Fill in the page.** In `projects/<id>/index.html`, replace every `[BRACKETED]` part
   and delete the sections you don't need.
3. **Add a screenshot (optional).** Save it as `projects/<id>/screenshot.png`. If it's
   missing, the page shows a neat "coming soon" box instead.
4. **Add the card.** In `projects.js`, copy one `{ ... }` block, paste it at the **top** of
   the list and fill it in. The home page then picks up the card, the filters, the
   numbers in the hero and the tools list. A `collection: 'SaferVic'` entry also
   appears in the SaferVic band.
5. **Publish.** In GitHub Desktop: write a short summary (for example "Add FloodVic"),
   click **Commit to main**, then **Push origin**. The live site updates within a minute or two.

If a project already has its own full website (like DarkVic), put it in `projects/<id>/`
instead of using the template, and point `page` in `projects.js` at it.

## Prompt for Claude (Claude Code, Cowork or Claude chat)

Attach or point Claude at this `portfolio` folder and your project files, then paste:

```text
Add a new project to my portfolio. Read portfolio/ADDING_A_PROJECT.md and follow it exactly.

Project files: [path to the project folder, report or app.R]
Project id: [short-lowercase-id]
Collection: [SaferVic, or none]
Status: [Live / Complete / In progress]
Live link: [URL, or none yet]

Build projects/<id>/index.html from projects/_template, using only facts from my files
(no invented numbers or claims). Add the entry at the top of projects.js. Keep my brand
exactly as assets/site.css defines it. Show me the page before I publish.
```

## Updating DarkVic

DarkVic's source lives outside the portfolio, in `dark-area/website` and
`dark-area/presentation`, where Cowork and Claude Code edit it. After any change there, run:

```text
powershell -ExecutionPolicy Bypass -File portfolio\tools\sync-darkvic.ps1
```

That copies both into `projects/darkvic/` and fixes the paths. Then publish as in step 5.

## Rules that keep the site consistent

- Brand: navy `#123456`, steel `#527FA9`, ice `#C8DFF1`, sky `#76A5CF`; Montserrat headings, Inter body.
- Logos in `assets/brand/` are used exactly as designed, never redrawn or recoloured.
- Every project states its data sources, licences and limits, and has an AI disclosure where AI helped.
- No emoji icons: use the icon set in `assets/site.js` (`<svg><use href="#i-map"/></svg>`).
