import React from 'react';

const PuzzleGenerator = () => {

    const startingBoard = [
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

    const fillPuzzle = startingBoard => {
        const emptyCell = NextEmptyCell(startingBoard)
        if (!emptyCell) return startingBoard 

        for (let num of numArray){
            
            if (safeToPlace(startingBoard, emptyCell, num)){
                startingBoard[emptyCell.rowIndex][emptyCell.colIndex] = num
                if (fillPuzzle(startingBoard)) return startingBoard 
                startingBoard[emptyCell.rowIndex][emptyCell.colIndex] = 0
            }
        }
        return false
    }

    console.log(startingBoard)
    console.log(fillPuzzle(startingBoard))

    return(
        <>
            <p>a game maybe   or something</p>
            <h2>{fillPuzzle(startingBoard)}</h2>
        </> 
    )
}

export default PuzzleGenerator;