import React, {useState } from 'react';

const GamePlay = ({}) => {

    const [digitSelect, setDigitSelect] = useState(null);
    const [errors, setErrors] = useState(0);
    const [activeBoard, setActiveBoard] = useState([]);
    //const [startBoard, setStartBoard] = useState(null);
    //const [solutionBoard, setSolutionBoard] = useState(null);

    
    
    
    const startBoard = [
        [0,8,7,4,9,1,6,2,5],
        [2,4,1,5,6,8,0,7,9],
        [5,6,9,3,2,7,4,1,8],
        [7,5,8,6,1,9,2,3,4],
        [1,2,3,7,8,4,5,9,6],
        [4,9,6,2,5,3,1,8,7],
        [9,3,4,0,7,6,8,5,2],
        [6,7,5,8,3,2,9,4,1],
        [8,0,2,9,4,5,7,6,0]
    ]

    const solutionBoard = [
        [3,8,7,4,9,1,6,2,5],
        [2,4,1,5,6,8,3,7,9],
        [5,6,9,3,2,7,4,1,8],
        [7,5,8,6,1,9,2,3,4],
        [1,2,3,7,8,4,5,9,6],
        [4,9,6,2,5,3,1,8,7],
        [9,3,4,1,7,6,8,5,2],
        [6,7,5,8,3,2,9,4,1],
        [8,1,2,9,4,5,7,6,3]
    ]
    

    const digits = ['1','2','3','4','5','6','7','8','9'];

    function selectDigit(e) {
        setDigitSelect(e.target.id)
    }

    function selectTile(e){
        let coordinates = e.target.id
        let row = coordinates[0]
        let col = coordinates[1]
        if(digitSelect == solutionBoard[row][col]){
            e.target.innerHTML = digitSelect
            e.target.value = digitSelect
        } else {
            const newErr = errors
            setErrors(newErr + 1)
        }
    }

    /*
    let grid = []
    if (puzzles !== null){
        //console.log("start", startBoard.start)
    for (let r=0; r<9; r++){
        grid.push([])
        for (let c=0; c<9; c++){
            grid.push([])
            grid[r].push(
                <div
                    className={(r===2 || r===5) ? 'horizontal-line': 'tile' && (c===2 || c===5) ? 'vertical-line': 'tile'}
                    key={`${r} ${c}`}
                    id={`${r}${c}`}
                    value={puzzles[2].start[r][c]}
                    onClick={(e) => selectTile(e)}
                >
                {puzzles[2].start[r][c] !== 0 ? puzzles[2].start[r][c] : null}
                </div>
            )
        }
    }
    }
   */ 
    
    
    //the OG   this works ! 
    let grid = []
    for (let r=0; r<9; r++){
        grid.push([])
        for (let c=0; c<9; c++){
            let cat = 0
            if (activeBoard.length > 0){
                cat = activeBoard[r][c]
            } else {
                if (startBoard[r][c] !== 0){
                    cat = startBoard[r][c]
                }
            }
            grid[r].push(
                <div
                    className={(r===2 || r===5) ? 'horizontal-line': 'tile' && (c===2 || c===5) ? 'vertical-line': 'tile'}
                    key={`${r} ${c}`}
                    id={`${r}${c}`}
                    value={cat}
                    onClick={(e) => selectTile(e)}
                > 
                {startBoard[r][c] !== 0 ? startBoard[r][c] : null}
                </div>
            )
        }
    }
    


    /*
    if (activeBoard.length > 0){
    
        for (let r=0; r<9; r++){
            for (let c=0; c<9; c++){
                //if (activeBoard[r][c].value === solutionBoard[r][c])
                console.log('these coordinates', activeBoard[r][c])
                //return(
                    //<p>done</p>
                  
                //)
            }
        }
    }
    */

        return(
            <>
                <h2>Errors: {errors}</h2>
                <hr width="500px"/>
                <br/>
                <div className='boardStyle'>
                    {grid}
                </div>
                <br/>
                <div className='digitStyle'>
                    {digits.map((num) => 
                        <div 
                            key={num} 
                            value={num}
                            id={num}
                            className={(num === digitSelect) ? 'selected-digit': 'digitTile'}
                            onClick={(e) => selectDigit(e)}
                        > 
                            {num} 
                        </div>
                    )}
                </div>
            </>
        )

    }


export default GamePlay;