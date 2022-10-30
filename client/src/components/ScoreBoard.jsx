import React from "react";

const ScoreBoard = ({puzzles}) => {

    //console.log(puzzles[1].scores)
    //console.log(puzzles[1].users)

    

    //let Pscores = puzzles.map(puzzle => puzzle.users.scores.sort())

    const users = puzzles.map(puzzle => puzzle.users.map(user => user.username))

    const scores = puzzles.map(puzzle => puzzle.scores.map(score => score.mistakes))

    console.log("these guys", users, scores)
    return(
        <>
        <h1>High Scores!</h1>
        <p className="column">{users}</p>
        <p className="row">{scores}</p>
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