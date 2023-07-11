function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;

  if (percentage === 100) {
    emoji = "🥳";
  } else if (percentage >= 80) {
    emoji = "😀";
  } else if (percentage >= 60) {
    emoji = "🙂";
  } else {
    emoji = "😞";
  }
  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> points out of{" "}
        <strong>{maxPossiblePoints}</strong> ({percentage}%)
      </p>
      <p className="highscore"> (Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        RESART
      </button>
    </>
  );
}

export default FinishedScreen;
