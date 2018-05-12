const userScore = (function () {
  const scoreRadioInputs = document.querySelectorAll('input[type="radio"][name="score"]');
  const commentInput = document.querySelector('input[type="text"][id="comment"]');

  return {
    getComment: () => (commentInput.value),
    getScore: () => {
      let score;
      Array.from(scoreRadioInputs).forEach(scoreRadioInput => {
        if (scoreRadioInput.checked) {
          score = Number(scoreRadioInput.value);
        }
      });
      return score;
    }
  };
}());
