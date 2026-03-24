1. Ce este o resursa (resource) in aplicatia ta?
O resursa in aplicatia Campus Info Hub reprezinta orice facilitate sau serviciu disponibil studentilor pe campus, despre care aplicatia ofera informatii structurate.
Exemple de resurse din aplicatie sunt Biblioteca Centrala (spatiu de studiu si imprumut de carti), Cantina Studenteasca (serviciu de masa pentru studenti) si Sala de Sport (spatiu pentru activitati fizice si recreere).
Fiecare resursa este descrisa printr-un set de campuri stocate in fisierul resources.json

2. Da exemplu de un URI si explica componentele acestuia.
Un exemplu de URI din aplicatie este `https://campus-info-hub.github.io/pages/library.html#schedule`.
Acest URI are urmatoarele componente:
- Scheme este `https`, adica protocolul de comunicare folosit (HyperText Transfer Protocol Secure).
- Host este `campus-info-hub.github.io`, adica numele serverului unde este gazduita aplicatia.
- Path este `/pages/library.html`, adica drumul catre resursa specifica, in acest caz pagina bibliotecii.
- Fragment este `#schedule`, o ancora in interiorul paginii care deruleaza automat la sectiunea "Program".
Un URI (Uniform Resource Identifier) identifica in mod unic o resursa pe web, iar un URL (Uniform Resource Locator) este un tip de URI care include si locatia acesteia.

3. Care parti sunt statice si care sunt dinamice?
Partile statice ale aplicatiei sunt structura HTML a paginilor (`index.html`, `library.html`, `cafeteria.html`, `gym.html`), stilizarea CSS din folderul `css/` si fisierul `resources.json`, al carui continut este scris manual si nu se modifica la rulare.
Partile dinamice sunt generate de JavaScript la rulare. Lista de resurse de pe pagina principala este incarcata prin `fetch()` din `resources.json`. Filtrarea resurselor dupa tip (ex: doar locuri de studiu) este calculata in timp real in browser. Tag-urile si categoriile sunt afisate dinamic pe baza campului `tags` din JSON, iar cardurile de resurse sunt generate programatic prin manipularea DOM-ului in `main.js`.

4. Este aplicatia ta document-centric sau interactive (sau ambele)? De ce?
Aplicatia este ambele. Paginile `library.html`, `cafeteria.html` si `gym.html` sunt document-centric, deoarece prezinta informatii statice pe care utilizatorul doar le citeste, asemanator unui document traditional. Continutul lor exista independent de orice interactiune.
Pagina `index.html` este interactiva, deoarece foloseste JavaScript pentru a incarca date prin `fetch()`, a filtra resursele dupa tip si a afisa dinamic rezultate fara reincarcarea paginii.

