document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.select-tailor');
  const formContainer = document.getElementById('form-container');
  const allForms = document.querySelectorAll('.tailor-form');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const formId = button.getAttribute('data-form-id');

      // Hide all forms first
      allForms.forEach(form => {
        form.style.display = 'none';
      });

      // Show the selected form
      const selectedForm = document.getElementById(formId);
      if (selectedForm) {
        formContainer.style.display = 'block';
        selectedForm.style.display = 'block';
      }
    });
  });
});
