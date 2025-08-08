document.addEventListener("DOMContentLoaded", function() {
  // Scripts grid
  const scriptList = document.getElementById('scripts-list');
  if (window.scripts && scriptList) {
    scriptList.innerHTML = window.scripts.map(script => `
      <div class="card">
        <div class="video-container">
          ${script.video 
            ? `<iframe src="${script.video}" frameborder="0" allowfullscreen></iframe>` 
            : `<img src="${script.screenshot}" alt="${script.title} screenshot" />`
          }
        </div>
        <div class="card-content">
          <h3 style="margin:0 0 0.6rem 0;">${script.title}</h3>
          <p>${script.description}</p>
          <div class="tech-stack">
            ${script.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          <a href="${script.github}" class="github-btn" target="_blank" rel="noopener">Get on GitHub</a>
        </div>
      </div>
    `).join('');
  }
});
