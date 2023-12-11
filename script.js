function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}
cursor();

// section animation
function section() {
  let t1 = gsap.timeline();
  t1.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  t1.from(".text-content h1, .text-content p", {
    y: 100,
    opacity: 0,
  });
}
part1();
