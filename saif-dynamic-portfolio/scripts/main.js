document.addEventListener("DOMContentLoaded", () => {
  AOS.init();

  fetch("data/projects.json")
    .then(res => res.json())
    .then(projects => {
      const container = document.getElementById("project-container");
      projects.forEach(p => {
        container.innerHTML += `
          <div class="project" data-aos="fade-up">
            <img src="${p.image}" alt="${p.title}">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <p><strong>Stack:</strong> ${p.tech}</p>
            <a href="${p.github}" target="_blank">GitHub</a> |
            <a href="${p.live}" target="_blank">Live Demo</a>
          </div>
        `;
      });
    });
});