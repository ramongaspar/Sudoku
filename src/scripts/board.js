import validateBoard from "./boardValidator.js";
import { retrieveImageFromValue } from "./cellManipulations.js";

export class Board{
    constructor(){
        this.board = new Array(9);
        for(let i=0;i<9;i++){
            this.board[i] = new Array(9)
        }   
        for(let i = 0; i<9; i++){
            for(let y=0; y< 9; y++){
                this.board[i][y] = '.'
            }
        } 
    }
    setCellValue(id, num){
        const ref = id.split(',')
        this.board[ref[0]][ref[1]] = num.toString()
    }

}

export const generateBoard = (cellsElements, currBoard, i = 16)=>{   
    if (i === 0) return;
    const num = Math.floor(Math.random()*9) + 1;
    if(num === 0){
        num+=1
    }
    const index = Math.floor(Math.random()*80) + 1;
    currBoard.setCellValue(cellsElements[index].id, num);
    const board = JSON.stringify(currBoard.board)
    console.log(board, num, 'BOARD EL')
    if(validateBoard(JSON.parse(board))){
        if(cellsElements[index].childNodes.length === 0){
            cellsElements[index].appendChild (retrieveImageFromValue(num, index));
        }else{
            cellsElements[index].removeChild(cellsElements[index].childNodes[0]);
            cellsElements[index].appendChild (retrieveImageFromValue(num, index));
        }
        i--
    }else{
        currBoard.setCellValue(cellsElements[index].id, '.');        
    }
    return generateBoard(cellsElements,currBoard,i)
}