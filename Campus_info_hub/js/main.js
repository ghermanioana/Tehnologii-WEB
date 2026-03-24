let toateResursele = [];

async function incarcaResurse() {
  try {
    const raspuns = await fetch('data/resources.json');
    const date = await raspuns.json();
    toateResursele = date.resurse;
    afiseazaResurse(toateResursele);
  } catch (eroare) {
    document.getElementById('lista-resurse').innerHTML =
      '<p style="color:red">⚠️ Eroare la incarcarea datelor. Ruleaza site-ul cu un server local.</p>';
    console.error('Eroare:', eroare);
  }
}

function afiseazaResurse(resurse) {
  const container = document.getElementById('lista-resurse');
  if (resurse.length === 0) {
    container.innerHTML = '<p>Nu s-au gasit resurse pentru aceasta categorie.</p>';
    return;
  }
  const htmlRanduri = resurse.map(function(resursa) {
    const taguri = resursa.tags.map(function(tag) {
      return '<span class="tag">' + tag + '</span>';
    }).join('');
    return `
      <div class="resursa-card">
        <h4>${resursa.name}</h4>
        <div class="detalii">
          📍 ${resursa.location} &nbsp;|&nbsp; 🏷️ Tip: ${resursa.type}
        </div>
        <div class="detalii">⏰ ${resursa.program}</div>
        <div>${taguri}</div>
      </div>
    `;
  });

  container.innerHTML = '';
  htmlRanduri.forEach(function(cardHTML) {
    const div = document.createElement('div');
    div.innerHTML = cardHTML;
    container.appendChild(div.firstElementChild);
  });
}

function filtreaza(categorie) {
  const butoane = document.querySelectorAll('.filtru-btn');
  butoane.forEach(function(btn) {
    btn.classList.remove('activ');
    if (btn.textContent.toLowerCase().includes(categorie) || 
        (categorie === 'toate' && btn.textContent.includes('Toate'))) {
      btn.classList.add('activ');
    }
  });
  if (categorie === 'toate') {
    afiseazaResurse(toateResursele);
  } else {
    const filtrate = toateResursele.filter(function(resursa) {
      return resursa.tags.includes(categorie);
    });
    afiseazaResurse(filtrate);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  incarcaResurse();
});