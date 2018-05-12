const loader = (function () {
  const loadingIndicator = document.querySelector('.loader');

  return {
    showLoader: isShowing => {
      if (isShowing) {
        loadingIndicator.classList.add('loader--visible');
      } else {
        loadingIndicator.classList.remove('loader--visible');
      }
    }
  };
}());
