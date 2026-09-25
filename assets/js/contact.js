/**
 * BNS DEVELOPMENT — CONTACT US SCRIPT
 * Handles contact form validation, interactive submission feedback, and state reset.
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById('project-contact-form');
  const successPanel = document.getElementById('contact-success-state');
  const resetBtn = document.getElementById('contact-reset-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check required fields
    const requiredInputs = form.querySelectorAll('[required]');
    let isValid = true;

    requiredInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('border-brand-red', 'bg-red-50/30');
      } else {
        input.classList.remove('border-brand-red', 'bg-red-50/30');
      }
    });

    if (!isValid) return;

    // Simulate reliable dispatch
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        <span>Transmitting Scope...</span>
      `;
    }

    setTimeout(() => {
      form.classList.add('hidden');
      if (successPanel) {
        successPanel.classList.remove('hidden');
      }
      // Smooth scroll to confirmation
      const container = document.getElementById('form-card-container');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 700);
  });

  if (resetBtn && form && successPanel) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <span>Transmit Project Inquiry</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        `;
      }
      successPanel.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }

  // Clear error styles on input
  form.querySelectorAll('input, textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('border-brand-red', 'bg-red-50/30');
    });
  });
}
