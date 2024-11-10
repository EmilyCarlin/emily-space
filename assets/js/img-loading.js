document.addEventListener("DOMContentLoaded", () => {
  const workBlocks = document.querySelectorAll(".work-block");

  workBlocks.forEach((block) => {
    const img = block.querySelector(".work-img");

    if (img.complete) {
      block.classList.add("loaded");
    } else {
      img.onload = () => {
        block.classList.add("loaded");
      };
    }
  });
});
