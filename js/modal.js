document.addEventListener("DOMContentLoaded", function () {
  const openModalBtns = document.querySelectorAll("[data-modal-open]");
  const closeModalBtns = document.querySelectorAll("[data-modal-close]");

  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      toggleModal(modal);
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-modal-close");
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      toggleModal(modal);
    });
  });

  function toggleModal(modal) {
    modal.classList.toggle("is-open");
  }

  const form = document.querySelector("#choco-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.querySelector("#user-name").value.trim();
      const email = document.querySelector("#user-email").value.trim();
      const phone = document.querySelector("#user-phone").value.trim();
      const comment = document.querySelector("#user-comment").value.trim();
      const agreed = document.querySelector("#user-agreement").checked;

      if (!agreed) {
        alert("Please accept the privacy policy to continue.");
        return;
      }

      console.log({ name, email, phone, comment });

      alert("Form submitted successfully!");
      form.reset();
      const modal = form.closest(".backdrop");
      if (modal) toggleModal(modal);
    });
  }
});
