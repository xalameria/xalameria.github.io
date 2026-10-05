# Ahmed Alameri — projects

Personal portfolio of spatial-data and digital-infrastructure projects, including the
**SaferVic** collection:

- **DarkVic**: where the signal goes dark. Probable mobile blackouts in eastern Victoria (GEOM30012).
- **CrimeVic**: where crime, disadvantage and police coverage meet (GEOM90007).

A plain static site (HTML, CSS and JavaScript, with no build step), published with GitHub Pages.

- `index.html`: the home page, built from `projects.js`
- `projects/<id>/`: one folder per project
- `projects/_template/`: the starting point for the next project
- `ADDING_A_PROJECT.md`: how to add one
- `tools/sync-darkvic.ps1`: refreshes the DarkVic copy from its source folders

Preview locally: `python -m http.server 8000` in this folder, then open http://localhost:8000.
