const radioDiv = document.querySelectorAll(".drd");
const radio = document.querySelectorAll(".rd");
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

let typed = new Typed(".auto-typed", {
  strings: ["stay.", "live."],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  // document.querySelector('body').classList.toggle('overflow-hidden');
});

for (let i = 0; i < radioDiv.length; i++) {
  radioDiv[i].addEventListener("click", () => {
    if (radio[i].checked) {
      radioDiv[i].classList.add("selected");
      for (let j = 0; j < radioDiv.length; j++) {
        if (j != i) {
          radioDiv[j].classList.remove("selected");
        }
      }
    }
  });
}
