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
function part1() {
  let t1 = gsap.timeline();
  t1.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });
  t1.from(".text-content h1, .text-content p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
  });
}
part1();

// part2 animation
function part2() {
  let partTwo = document.querySelector(".part2");
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  // execute this code whenever mouse enters into this section
  partTwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      innerHTML: "<i class='fa-solid fa-volume-high'></i>",
      fontSize: "25px",
      color: "black",
      margin: "20px",
      background: "white",
    });

    //  change section color
    gsap.to(body, {
      background: "#0f0f0f",
      color: "white",
    });
  });

  // executing code whenever mouse leaves our part2
  partTwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      margin: 0,
      innerHTML: "",
    });

    //  change section color
    gsap.to(body, {
      background: "white",
      color: "#0f0f0f",
    });
  });
}
part2();

// section3
function section3() {
  let cursor = document.querySelector(".cursor");
  let sectionThree = document.querySelector(".section3");

  // cursor changes to black in part3
  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
    });
  });
}
section3();
