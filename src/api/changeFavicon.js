const changeFavicon = (src) => {
  const link = document.createElement('link');
  const oldLink = document.getElementById('dynamic-favicon');

  link.id = 'dynamic-favicon';
  link.rel = 'shortcut icon';
  link.href = src;

  if (oldLink) {
    try {
      document.head.removeChild(oldLink);
    } catch (error) {}
  }

  document.head.appendChild(link);
}

export default changeFavicon;
