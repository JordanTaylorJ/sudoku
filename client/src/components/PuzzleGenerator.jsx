import React, {useState} from 'react';

const PuzzleGenerator = () => {

    const [newPuzzle, setNewPuzzle] = useState({
        start: [],
        solution: []
    });

    const emptyBoard = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ];

    //shuffle this before using so it's randommm ! :)
    const numArray = [1,2,3,4,5,6,7,8,9];

    //Check if location is safe to place num by row, column, and box
    const rowSafe = (puzzleArr, emptyCell, num) => {
        return puzzleArr[ emptyCell.rowIndex].indexOf(num) === -1
    }

    const columnSafe = (puzzleArr, emptyCell, num) => {
        return !puzzleArr.some(row => row[ emptyCell.colIndex ] === num )
    }

    const boxSafe = (puzzleArr, emptyCell, num) => {
        //define the 3x3 box
        let rowBoxStart = emptyCell.rowIndex - (emptyCell.rowIndex % 3)
        let colBoxStart = emptyCell.colIndex - (emptyCell.colIndex % 3)
        //if the number already exists in the box, not safe to place
        let safe = true
        for (let boxRow of [0,1,2]){
            for (let boxCol of [0,1,2]){
                if (puzzleArr[rowBoxStart + boxRow][colBoxStart + boxCol] === num){
                    safe = false
                }
            }
        }
        return safe
    }

    const safeToPlace = (puzzleArr, emptyCell, num) => {
        return rowSafe(puzzleArr, emptyCell, num) &&
        columnSafe(puzzleArr, emptyCell, num) &&
        boxSafe(puzzleArr, emptyCell, num)
    }

    const NextEmptyCell = (puzzleArr) => {
        const emptyCell = {rowIndex: "", colIndex: ""}
        puzzleArr.forEach((row, rowIndex) => {
            if (emptyCell.colIndex !== "") return
            let firstZero = row.find(col => col === 0)
            if (firstZero === undefined) return 
            emptyCell.rowIndex = rowIndex
            emptyCell.colIndex = row.indexOf(firstZero)
        })
        if (emptyCell.colIndex !== "") return emptyCell
        return false;
    }

    const fillPuzzle = emptyBoard => {
        const emptyCell = NextEmptyCell(emptyBoard)
        if (!emptyCell) return emptyBoard 
        for (let num of numArray){
            if (safeToPlace(emptyBoard, emptyCell, num)){
                emptyBoard[emptyCell.rowIndex][emptyCell.colIndex] = num
                if (fillPuzzle(emptyBoard)) return emptyBoard 
                emptyBoard[emptyCell.rowIndex][emptyCell.colIndex] = 0
            }
        }
        return false
    }
    

    const handleClick = () => {
        setNewPuzzle({
            start: [
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]
            ],
            solution: emptyBoard
        })
        fetch("/games/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newPuzzle})
        })
        .then(r => r.json())
        .then(r => console.log(r))
    }
    

    return(
        <>
            <h1>MEEP </h1>
            <p>{fillPuzzle(emptyBoard)}</p>
            
            <br/>
            <button onClick={handleClick}>how about this though</button>
        </>
    )
}

export default PuzzleGenerator;




/*
    let grid = []
    function createDisplay() {
        let solution = newPuzzle.solution
        for (let r=0; r<9; r++){
            grid.push([])
            for (let c=0; c<9; c++){
                grid[r].push(
                    <div
                        className={
                            (r===2 && c===2) ? 'h-v-line' : 'tile'
                            &&(r===2 && c===5) ? 'h-v-line' : 'tile'
                            &&(r===5 && c===2) ? 'h-v-line' : 'tile'
                            &&(r===5 && c===5) ? 'h-v-line' : 'tile'
                            &&(r===2 || r===5) ? 'horizontal-line': 'tile' 
                            && (c===2 || c===5) ? 'vertical-line': 'tile'
                        }
                        key={`${r} ${c}`}
                        id={`${r}${c}`}
                        //value={solution[r][c]}
                    > 
                    0
                    </div>
                )
            }
        }
    }
    
   console.log("solution?", newPuzzle.solution)


    //console.log("board", emptyBoard);
    //console.log("newPuzzle", newPuzzle);


{grid ? 
                <div className='boardStyle'>
                    {grid}
                </div>
            : <></>
            }

*/