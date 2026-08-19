"use strict";

const menuButton = document.querySelector(".menu-button");
const siteNavigation = document.querySelector(".site-nav");

if (menuButton && siteNavigation) {
  const menuLabel = menuButton.querySelector(".menu-button__label");

  const setMenuState = (isOpen) => {
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    siteNavigation.classList.toggle("is-open", isOpen);

    if (menuLabel) {
      menuLabel.textContent = isOpen ? "CLOSE" : "MENU";
    }
  };

  menuButton.addEventListener("click", () => {
    setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
  });

  siteNavigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      menuButton.focus();
    }
  });

  window.matchMedia("(min-width: 64rem)").addEventListener("change", () => {
    setMenuState(false);
  });
}

const reservationForm = document.querySelector("#reservation-form");
const formSuccess = document.querySelector("#form-success");

if (reservationForm && formSuccess) {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!reservationForm.checkValidity()) {
      reservationForm.reportValidity();
      return;
    }

    reservationForm.reset();
    formSuccess.hidden = false;
    formSuccess.focus();
  });

  reservationForm.addEventListener("input", () => {
    formSuccess.hidden = true;
  });
}
