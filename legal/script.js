// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  setTimeout(() => {
    status.textContent = "Thank you for your message. We'll be in touch soon!";
    this.reset();
  }, 1000);
});

// Modal logic
const modal = document.getElementById("articleModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.querySelector(".modal-close");

// Open modal and load article content
document.querySelectorAll('.section-blog a').forEach(link => {
  link.addEventListener('click', async (e) => {
    e.preventDefault();

    const url = link.getAttribute('href');
    if (!url) return;

    modal.style.display = "block";
    modalBody.innerHTML = "Loading article...";

    try {
      const response = await fetch(url);
      const text = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(text, 'text/html');
      const content = doc.querySelector('body')?.innerHTML || 'Article could not be loaded.';
      modalBody.innerHTML = content;
    } catch (err) {
      modalBody.innerHTML = "Error loading content.";
    }
  });
});

// Close modal on close button click
modalClose.onclick = () => {
  modal.style.display = "none";
  modalBody.innerHTML = '';
};

// Close modal if click outside content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    modalBody.innerHTML = '';
  }
};
