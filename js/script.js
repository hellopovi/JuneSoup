const juneSoup = (function () {
  const userScoreForm = document.querySelector('#user-score');

  function submitUserScore(e) {
    e.preventDefault();
    scoreUploader.uploadScore();
  }
  userScoreForm.addEventListener('submit', submitUserScore);
}());
