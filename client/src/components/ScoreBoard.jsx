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

//puzzle [users]   scores.length   longest = most games played :)
//^^ for each puzzle and list the most plays of each   sorted ? 
// user with most plays ?    the list user with least errors ? 

//last one below :
//{puzzles.map(puzzle => puzzle.scores.map(score => <ul key={score.id}>{`${score.user_id} ${score.mistakes}`}</ul>))}


//{puzzles.users.map(user => <p>{user.name}</p>)}

//{puzzles.map(puzzle => puzzle.scores.map(score => <ul>{`${score.user_id} ${score.mistakes}`}</ul>))}


/*
        
        {puzzles.map(puzzle => {
            <>
            <p key={puzzle.id}>{puzzle.id}</p>
            return {puzzle.scores.map(score => <h1 key={score.id}>{score.mistakes}</h1>)}
            </>
        }
        )}
*/




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