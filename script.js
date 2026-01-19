document.querySelectorAll("[data-carousel]").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const items = track.children;
  let index = 0;

  const update = () =>
    track.style.transform = `translateX(-${index * 100}%)`;

  carousel.querySelector(".left").onclick = () => {
    index = (index - 1 + items.length) % items.length;
    update();
  };

  carousel.querySelector(".right").onclick = () => {
    index = (index + 1) % items.length;
    update();
  };

  setInterval(() => {
    index = (index + 1) % items.length;
    update();
  }, 4000);
});

const transition = document.getElementById("page-transition");

document.querySelectorAll(".nav-item").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    transition.classList.add("active");
    setTimeout(() => location.href = link.href, 700);
  };
});

const mainVideo = document.getElementById("mainVideo");
const sceneTitle = document.getElementById("sceneTitle");
const sceneText = document.getElementById("sceneText");

document.querySelectorAll(".scene-item").forEach(item => {
  item.onclick = () => {
    document.querySelector(".scene-item.active")?.classList.remove("active");
    item.classList.add("active");

    mainVideo.src = item.dataset.video;
    sceneTitle.textContent = item.dataset.title;
    sceneText.textContent = item.dataset.text;
    mainVideo.play();
  };
});
