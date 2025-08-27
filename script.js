function updateTime() {
  let now = new Date();
  let tanggal = now.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("waktu").innerHTML = tanggal;
}

updateTime();

const faders = document.querySelectorAll(".fade-in-scroll");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 300); // 300ms delay per elemen
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => observer.observe(el));

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    // close other items
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".icon").textContent = "+";
      }
    });

    // toggle current item
    item.classList.toggle("active");

    const icon = item.querySelector(".icon");
    icon.textContent = item.classList.contains("active") ? "–" : "+";
  });
});

const menu = document.getElementById("menu");
const navbar = document.querySelector(".sidebar-menu");

menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menu.classList.toggle("bx-x");
});
