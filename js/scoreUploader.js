const scoreUploader = (function () {
  const ENDPOINT_URL = 'https://soup-ranking-dev.herokuapp.com/score';

  function getUserScore() {
    const score = userScore.getScore();
    const userComment = userScore.getComment();
    return { id: Date.now(), date: Date.now(), score, userComment };
  }

  async function updateScore(score) {
    loader.showLoader(true);
    const submit = await fetch(ENDPOINT_URL, {
      body: JSON.stringify(score),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    });
  }

  return {
    uploadScore: () => {
      const userScore = getUserScore();
      updateScore(userScore).then(() => {
        alert('I have saved your score!')
      }).finally(error => loader.showLoader(false));
    }
  }
}());
