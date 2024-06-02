import {Board, generateBoard } from "./board.js";
import { generateCellIdentifier } from "./cells.js";



export const main = ()=>{
   
    const cellElements = document.getElementsByClassName('cell')
    generateCellIdentifier(cellElements)
    const currBoard = new Board()    
    generateBoard(cellElements,currBoard)


}