import { SliderValueLabel } from '@mui/material';
import React from 'react';

const Game = () => {
    
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


    function setGame(){
        for (let r=0; r<9; r++){
            for (let c=0; c<9; c++){
                console.log(c);
                return(
            <div className='tile'> Hey</div>
                )
            }
        }
    }

    return(
        <>
            <h1>Game</h1>
            <hr width="500px"/>
            <br/>
            <div className='boardStyle'>
            {setGame()}
            </div>
            <div className='digitStyle'>
                {digits.map((i) => 
                    <div key={i} className="digitTile" > {i} </div>
                )}
            </div>
        </>
    )
}

export default Game;