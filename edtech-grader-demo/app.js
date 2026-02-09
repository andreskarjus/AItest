const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const isActive = toggle.classList.contains("active");
    toggle.classList.toggle("active", !isActive);
    toggle.textContent = isActive ? "Off" : "On";
  });
});
