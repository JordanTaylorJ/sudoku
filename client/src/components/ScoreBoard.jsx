import React from "react";

const ScoreBoard = ({puzzles}) => {

    const scores = puzzles.map(puzzle => puzzle.scores.map(score => <p>{`${score.user.username} ${score.mistakes}`}</p>))

    return(
        <>
        <h1>High Scores!</h1>
        <p>{scores}</p>
        </>
    )
}

export default ScoreBoard;

/*
        {puzzles.map(puzzle => {
                <>
                <p>{puzzle.id}</p>
                {puzzle.scores.map(score => {
                    <>
                        <p>{score.mistakes}</p>
                        <p>{score.user.username}</p>
                    </>
                })}
                </>
            })}
            */