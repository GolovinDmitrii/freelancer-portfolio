const btnDarkMode = document.querySelector(".dark-mode-btn");

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn_active");
  document.body.classList.add("dark");
} else {
  btnDarkMode.classList.remove("dark-mode-btn_active");
  document.body.classList.remove("dark");
}

btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn_active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
