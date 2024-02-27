import get from "lodash/get";

const flash = (x) => {
  if (!x) return null;

  x.scrollIntoView({ behavior: "smooth" });

  const ownPosition = get(x, "style.position");
  const isNotRelative = ownPosition !== "relative";

  if (isNotRelative) {
    x.style.position = "relative";
  }

  const y = document.createElement("div");

  setTimeout(() => {
    const size = x.getBoundingClientRect();

    const flashWidth = size.width;
    const flashHeight = size.height;

    y.style.position = "absolute";
    y.style.width = flashWidth ? `${flashWidth}px` : `100%`;
    y.style.height = flashHeight ? `${flashHeight}px` : `100%`;
    y.style.backgroundColor = "rgb(255 229 5 / 50%)";
    y.style.top = `0`;
    y.style.left = "0";
    y.style.zIndex = "999";
    y.style.transition = "all 0.45s ease";

    x.appendChild(y);
  }, 300);

  setTimeout(() => {
    if (y) y.style.opacity = "0";
  }, 700);

  setTimeout(() => {
    if (y) {
      y.remove();
      x.style.position = ownPosition;
    }
  }, 1150);
};

export default flash;
