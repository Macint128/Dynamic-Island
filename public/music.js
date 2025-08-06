const main = document.querySelector("#main");
const album = document.querySelector("#album");
const volume = document.querySelector("#volume");
const middle = document.querySelector("#middle");
const bottom = document.querySelector("#bottom-control");
const favorite = document.querySelector("#favorite");

let isHovered = false;

main.addEventListener("mouseenter", () => {
  isHovered = true;
  main.classList.add("hovered");
  album.classList.remove("hide", "show");
  album.classList.add("show");
  volume.classList.remove("hide", "show");
  volume.classList.add("show");
});

main.addEventListener("mouseleave", () => {
  isHovered = false;
  main.classList.remove("big", "hovered");
  album.classList.remove("big", "show", "hide");
  album.classList.add("hide");
  volume.classList.remove("show", "hide", "big");
  volume.classList.add("hide");
  bottom.classList.remove("show");
  middle.innerHTML = "";
});

main.addEventListener("click", () => {
  if (isHovered) {
    isHovered = false;
    main.classList.remove("hovered");
  }
  main.classList.add("big");
  album.classList.add("big");
  volume.classList.add("big");
  bottom.classList.add("show");
  middle.innerHTML = `
    <div style="color: white; text-align: center;">
      <h3 style="margin: 0; font-size: 18px;">Heave Ho</h3>
      <p style="margin: 0; font-size: 14px; opacity: 0.7;">Boom Kitty & Teminite</p>
    </div>
  `;
});
