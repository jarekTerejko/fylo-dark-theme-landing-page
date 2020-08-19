gsap.registerPlugin(ScrollTrigger);

const animElements = document.querySelectorAll(".scroll-animation");

animElements.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "+=120", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1.4,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: element,
        start: "top 40%",
      },
    }
  );
});
