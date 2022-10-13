import React, {useState} from 'react';

const Game = () => {
    
    const [digitSelect, setDigitSelect] = useState(null);
    const [errors, setErrors] = useState(0);
    const [activeBoard, setActiveBoard] = useState([]);

    /*
    const startBoard = [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---"
    ];
*/

    const startBoard = [
        "-87491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "49625-187",
        "9-4176852",
        "67583294-",
        "81294576-"
    ];

    const solutionBoard = [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763"
    ];

    const digits = ['1','2','3','4','5','6','7','8','9'];

    function selectDigit(e) {
        setDigitSelect(e.target.id)
    }

    function selectTile(e){
        let coordinates = e.target.id
        let row = coordinates[0]
        let col = coordinates[1]
        if(digitSelect === solutionBoard[row][col]){
            e.target.innerText = digitSelect
            e.target.value = digitSelect
            setActiveBoard(grid)
        } else {
            const newErr = errors
            setErrors(newErr + 1)
        }
    }
    

    let grid = []
    for (let r=0; r<9; r++){
        grid.push([])
        for (let c=0; c<9; c++){
            let cat = 0
            if (activeBoard.length > 0){
                cat = activeBoard[r][c]
            } else {
                if (startBoard[r][c] !== "-"){
                    cat = startBoard[r][c]
                }
            }
            grid[r].push(
                <div
                    className={(r===2 || r===5) ? 'horizontal-line': 'tile' && (c===2 || c===5) ? 'vertical-line': 'tile'}
                    key={`${r} ${c}`}
                    id={`${r}${c}`}
                    //value = {startBoard[r][c] !== "-" ? startBoard[r][c] : activeBoard[r][c]}
                    value={cat}
                    onClick={(e) => selectTile(e)}
                > 
                {startBoard[r][c] !== "-" ? startBoard[r][c] : null}
                </div>
            )
        }
    }

    console.log('grid', grid)
    /*
    console.log(activeBoard)
    
    let completed = true
    if (activeBoard !== []) {
        
        for (let r=0; r<9; r++){
            for (let c=0; c<9; c++){
                console.log("yo", grid[r][c].props.value) 
                if (activeBoard[r][c].props.value === 0){
                    completed = false 
                }
                
            }
        }
    } else {
        completed = false
    }

    console.log(completed)
    
    

    let completed = true

    if (activeBoard.length > 0){
        for (let r=0; r<9; r++){
            for (let c=0; c<9; c++){
                console.log("yo", activeBoard[r][c].props.value) 
                if (activeBoard[r][c].props.value === 0){
                    completed = false 
                }
            }
        }
    } else {
        completed = 0
    }

    if (completed === true){
        return(
            <>
                <h1>you done</h1>
            </>
        )
    } else {
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


export default Game;