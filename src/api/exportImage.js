import pixelsToUrl from "./pixelsToUrl";

const downloadUrl = (name, url) => {
  const a = document.createElement('a');

	a.href = url;
  a.download = name;

	document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
};

const exportImage = (icon) => {
  const {name, pixels} = icon;
  const url = pixelsToUrl(pixels);

  downloadUrl(name + '.png', url);
};

export default exportImage;
