/** @format */

const navLink = document.querySelectorAll(".link-item");
const toggleBtn = document.querySelector(".switch-mode-btn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
	body.classList.toggle("dark");
});
navLink.forEach(e => {
	e.addEventListener("click", () => {
		navLink.forEach(link => {
			link.classList.remove("active");
		});
		e.classList.add("active");
	});
});
