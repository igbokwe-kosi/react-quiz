function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer != null)} max={numQuestions} />
      <p>
        {" "}
        Question <strong>{index}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints} points
      </p>
    </header>
  );
}

export default Progress;
