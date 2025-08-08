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


// CONTACT DROPDOWN LOGIC
document.addEventListener("DOMContentLoaded", function() {
  const contactBtn = document.getElementById('contactBtn');
  const contactOptions = document.getElementById('contactOptions');
  const contactModal = document.getElementById('contactModal');
  const contactDetails = document.getElementById('contactDetails');
  const closeModal = document.getElementById('closeContactModal');

  if (contactBtn) {
    contactBtn.onclick = () => {
      contactOptions.classList.toggle('show');
    };
  }

  window.showContact = function(method) {
    contactModal.style.display = 'block';
    contactOptions.classList.remove('show');
    if (method === 'discord') {
      contactDetails.innerHTML = `<strong>Discord:</strong> MacaroniandBeans#0001 <br><a href="https://discord.com/users/your-discord-id" target="_blank">Open Discord</a>`;
    } else if (method === 'email') {
      contactDetails.innerHTML = `<strong>Email:</strong> <a href="mailto:your@email.com">your@email.com</a>`;
    }
  };

  if (closeModal) {
    closeModal.onclick = () => {
      contactModal.style.display = 'none';
    };
  }

  window.onclick = function(event) {
    if (event.target === contactModal) {
      contactModal.style.display = 'none';
    }
  };
});
