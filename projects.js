/* =============================================================================
   PROJECTS: the one list the home page is built from.
   To add a project, copy one { ... } block, paste it at the TOP of the list
   (newest first), and fill it in. Full steps: ADDING_A_PROJECT.md.

   id          short lowercase name, same as its folder in projects/
   name        [first part, second part]: the second part is drawn in steel blue
   collection  a family it belongs to ("SaferVic"), or "" for none
   tagline     one line, under the name
   summary     two or three sentences: the problem and what you built
   subject     course code and name, or "Personal project"
   date        "YYYY-MM" (sorting); year shown on the card
   status      "Live", "Complete" or "In progress"
   tags        filters on the home page (keep them short and reusable)
   tools       languages and tools used; collected into the About section
   cover       an image path or URL, or "" for a styled name card
   page        the project's own page
   ============================================================================= */
window.SITE = {
  name: 'Ahmed Alameri',
  email: 'alameria@student.unimelb.edu.au',
  institution: 'The University of Melbourne'
};

window.PROJECTS = [
  {
    id: 'darkvic',
    name: ['Dark', 'Vic'],
    collection: 'SaferVic',
    tagline: 'Where the signal goes dark',
    summary: 'A dead mobile tower cannot report itself. DarkVic polls public power-outage and hazard feeds every 15 minutes and infers probable communication blackouts across 770 towns in eastern Victoria, without ever claiming certainty.',
    subject: 'GEOM30012 Digital Infrastructure Systems Capstone',
    date: '2026-10',
    status: 'Live',
    tags: ['Digital infrastructure', 'Real-time data', 'R Shiny', 'Python', 'GIS'],
    tools: ['Python', 'R', 'Shiny', 'Leaflet', 'QGIS', 'HTML/CSS/JS'],
    cover: 'https://d8j0ntlcm91z4.cloudfront.net/user_3KEXbfG7OvLvS1cPxfbDZXvNdcb/hf_20261004_181502_4bf5c92d-c255-4901-aa2b-1c62bbaafaf7_min.webp',
    page: 'projects/darkvic/index.html'
  },
  {
    id: 'crimevic',
    name: ['Crime', 'Vic'],
    collection: 'SaferVic',
    tagline: 'Where crime, disadvantage and police coverage meet',
    summary: 'An interactive dashboard for council safety officers and police planners: recorded crime for all 79 Victorian council areas from 2017 to 2026, set against disadvantage and the reach of 325 police stations, so crime is read per resident, not just by count.',
    subject: 'GEOM90007 Information Visualisation',
    date: '2026-09',
    status: 'Complete',
    tags: ['Information visualisation', 'R Shiny', 'GIS', 'Public safety'],
    tools: ['R', 'Shiny', 'bslib', 'Leaflet', 'ggplot2', 'ggiraph', 'sf'],
    cover: '',
    page: 'projects/crimevic/index.html'
  }
];
