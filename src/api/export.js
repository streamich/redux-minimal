import pixelsToUrl from "./pixelsToUrl";

const downloadUrl = (name, url) => {
  const a = document.createElement('a');

	a.href = url;
  a.download = name;

	document.body.appendChild(a);
  a.click();

  document.body.removeChild(a);
};

export const exportImage = (icon) => {
  const {name, pixels} = icon;
  const url = pixelsToUrl(pixels);

  downloadUrl(name + '.png', url);
};

export const exportJson = (icon) => {
  const json = JSON.stringify(icon, null, 4);
  const url ='data:application/json;utf8,' + encodeURIComponent(json)

  downloadUrl(icon.name + '.json', url);
};
