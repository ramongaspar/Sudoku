import { changeCellValue } from "./cellManipulations.js"

export const generateCellIdentifier = (cellElements)=>{
    const addCellsRef = () =>{
        for(let index = 0; index < 81; index++){
            const box = Math.floor(index / 9)
            const pos = Math.floor(index % 9)
            console.log(cellElements[index])
            cellElements[index].id = setCellId(box, pos)
            const c = cellElements[index]
            try{
                c.addEventListener('click',()=>changeCellValue(index,cellElements))
            }catch{
                console.log(index);
            }
        }
    }
    
    const setCellId = (box, pos)=>{
        let col, row;
        if (box === 0 || box === 3 || box === 6) {
                col = (pos % 3);
            } else if (box === 1 || box === 4 || box === 7) {
                col = (pos % 3) + 3;
            } else if (box === 2 || box === 5 || box === 8) {
                col = (pos % 3) + 6;
            }
    
            if(box === 0 || box === 1 || box === 2){
                row = Math.floor(pos / 3)
            }else if(box === 3 || box === 4 || box === 5){
                row = Math.floor(pos / 3) + 3
            }else if(box === 7 || box === 6 || box === 8){
                row = Math.floor(pos / 3) + 6
            }
        const cellId = [row,col]
        return cellId
    }
    addCellsRef()
}
