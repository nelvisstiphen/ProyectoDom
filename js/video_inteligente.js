const d = document;
const w = window;

export default function smartVideo() {
  const $videos = d.querySelectorAll("video[data-smart-video]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }

      w.addEventListener("visibilityChange", (e) => {
        d.visibilityState === "visible"
          ? entry.target.play()
          : entry.target.pause();
      });
    });
  };
  const observer = new IntersectionObserver(cb, { threshold: 0.75 });

  $videos.forEach((el) => observer.observe(el));
}
