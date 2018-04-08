(function() {
  let scoreRadioInputs;
  let commentInput;

  document.addEventListener('DOMContentLoaded', function(event) {
    const submitScoreButton = document.querySelector('#submitScoreBtn');
    scoreRadioInputs = document.querySelectorAll('input[type="radio"][name="score"]');
    commentInput = document.querySelector('input[type="text"][id="comment"]');
    submitScoreButton.addEventListener('click', submitScore);
  });

  const ENDPOINT_URL = 'https://soup-ranking.herokuapp.com/score';

  function submitScore(e) {
    e.preventDefault();
    const comment = commentInput.value;
    
    let score;
    Array.from(scoreRadioInputs).forEach(scoreRadioInput => {
      if (scoreRadioInput.checked) {
        score = Number(scoreRadioInput.value);
      }
    });

    if (!score) {
      return alert('Give me score!');
    }

    const userScore = { id: Date.now(), date: Date.now(), score, comment };
    updateScore(userScore).then(() => alert('I have saved your score!'));
  }

  async function updateScore(score) {
    const submit = await fetch(ENDPOINT_URL, {
      body: JSON.stringify(score),
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST'
    });
  }
})();
