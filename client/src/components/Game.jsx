import React, {useState} from 'react';

const Game = () => {
    
    const [digitSelect, setDigitSelect] = useState(null);
    const [errors, setErrors] = useState(0);

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

    const digits = [1,2,3,4,5,6,7,8,9];

    function selectNum(e) {
        let selected = e.target.id
        console.log("selected number", e.target.class)
        if(digitSelect != null){
            digitSelect.className = 'digitTile'
        }
        e.target.className = 'selected-digit'
        setDigitSelect(selected)
    }

    function selectTile(e){
        let coordinates = e.target.id
        let row = coordinates[0]
        let col = coordinates[1]
        if(digitSelect === solutionBoard[row][col]){
            e.target.innerText = digitSelect
        } else {
            const newErr = errors
            setErrors(newErr + 1)
        }
    }

    let grid = []
    for (let r=0; r<9; r++){
        grid.push([])
        for (let c=0; c<9; c++){
            grid[r].push(
                <div
                    className={(r===2 || r===5) ? 'horizontal-line': 'tile' && (c===2 || c===5) ? 'vertical-line': 'tile'}
                    key={`${r} ${c}`}
                    id={`${r}${c}`}
                    onClick={(e) => selectTile(e)}
                > 
                {startBoard[r][c] !== "-" ? startBoard[r][c] : null}
                </div>
            )
        }
    }

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
                        className="digitTile" 
                        onClick={(e) => selectNum(e)}
                    > 
                        {num} 
                    </div>
                )}
            </div>
        </>
    )
}

export default Game;