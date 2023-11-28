function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  body.addEventListener("mousemove", (0) => (
    gsap.to(cursor, {
        x: e.x + "px",
        y: e.y + "px",
    })
  ));
}
