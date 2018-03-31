const pixelsToUrl = (pixels) => {
  const canvas = document.createElement("canvas");

  canvas.width = 16;
  canvas.height = 16;

  const ctx = canvas.getContext("2d");

  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const color = (pixels[y] || {})[x];

      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }

  return canvas.toDataURL();
};

export default pixelsToUrl;
