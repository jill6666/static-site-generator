const handlePreview = pageId => {
  const goToUrl = `${window.location.protocol}//${window.location.host}/view/${pageId}`;
  window.open(goToUrl);
};
export default handlePreview;
