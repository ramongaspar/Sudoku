function isValidSudoku(board) {
    const rowsList = [];
    const collumsList = [];
    const blocksList = new Array(9);
    for(let row=0;row<9;row++){
        const rowMap = {}
        for(let collum = 0; collum < 9; collum++){
            if (board[row][collum]!='.'){
                if(rowMap[board[row][collum]] == undefined){
                    rowMap[board[row][collum]] = collum;
                }else{
                    return false;
                }
            }
        }
        rowsList.push(rowMap);
    }
    for(let collum=0;collum<9;collum++){
        let collumMap= {};
        for(let row = 0; row < 9; row++){
            if(board[row][collum] !='.'){
                if(collumMap[board[row][collum]] == undefined){
                    collumMap[board[row][collum]] = row;
                }else{
                    return false;
                }
            }
        }
        collumsList.push(collumMap);
    }
   

   
    for(let currRow = 0; currRow < 9; currRow++){
        if (currRow < 3){
            const blockMap1 = {}
            const blockMap2 = {}
            const blockMap3 = {}

            for(let number = 1; number < 10; number++){
            
                const currCollum = rowsList[currRow][number]

                if(currCollum != undefined){
                    if(currCollum < 3){
                        const check = blocksList[0] || {}
                        if( check[number] == undefined){
                            blockMap1[number] = [currRow , currCollum];
                           
                        }else{
                            return false;
                        }
                        blocksList[0] = blocksList[0] == undefined ? blockMap1 : {...blocksList[0], ...blockMap1}  ;
                    }

                    else if(currCollum > 2 && currCollum < 6){
                        const check = blocksList[1] || {}
                        if( check[number] == undefined){
                            blockMap2[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[1] = blocksList[1] == undefined ? blockMap2 : {...blocksList[1], ...blockMap2}  ;
                        
                    }

                    else if(currCollum > 5){
                        const check = blocksList[2] || {}
                        if( check[number] == undefined){
                            blockMap3[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[2] = blocksList[2] == undefined ? blockMap3 : {...blocksList[2], ...blockMap3}  ;
                       
                    }
                }
            }

        }

        else if(currRow > 2 && currRow < 6){
            const blockMap4 = {}
            const blockMap5 = {}
            const blockMap6 = {}

            for(let number = 1; number < 10; number++){ 

                const currCollum = rowsList[currRow][number] 

                if(currCollum != undefined){
                    if(currCollum < 3){
                        const check = blocksList[3] || {}
                        if( check[number] == undefined){
                            blockMap4[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[3] = blocksList[3] == undefined ? blockMap4 : {...blocksList[3], ...blockMap4}  ;
                    }

                    else if(currCollum > 2 && currCollum < 6){
                        const check = blocksList[4] || {}
                        if( check[number] == undefined){
                            blockMap5[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[4] = blocksList[4] == undefined ? blockMap5 : {...blocksList[4], ...blockMap5}  ;
                        
                    }
                    else if(currCollum > 5){
                        const check = blocksList[5] || {}
                        if( check[number] == undefined){
                            blockMap6[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[5] = blocksList[5] == undefined ? blockMap6 : {...blocksList[5], ...blockMap6}  ;
                       
                    }
                }
            }

        }
        else if(currRow > 5){

            const blockMap7 = {}
            const blockMap8 = {}
            const blockMap9 = {}

            for(let number = 1; number < 10; number++){
            
                const currCollum = rowsList[currRow][number] 

                if(currCollum != undefined){
                   
                    if(currCollum < 3){
                        const check = blocksList[6] || {}
                        if( check[number] == undefined){
                            
                            blockMap7[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[6] = blocksList[6] == undefined ? blockMap7 : {...blocksList[6], ...blockMap7}  ;
                    }

                    else if(currCollum > 2 && currCollum < 6){
                        const check = blocksList[7] || {}
                        if( check[number] == undefined){
                            blockMap8[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[7] = blocksList[7] == undefined ? blockMap8 : {...blocksList[7], ...blockMap8}  ;
                    }
                    else if(currCollum > 5){
                        const check = blocksList[8] || {}
                        if( check[number] == undefined){
                            blockMap9[number] = [currRow , currCollum];
                        }else{
                            return false;
                        }
                        blocksList[8] = blocksList[8] == undefined ? blockMap9 : {...blocksList[8], ...blockMap9}  ;
                    }
                }
            }

        }
    }
   return true
}


class Board{
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

const cell = document.getElementsByClassName('cell')
const currBoard = new Board()

const makeImg = (num) =>{
    const img = document.createElement('img')
    img.src = `images/${num}.png`
    return img
}

const generateBoard = (i = 16)=>{   
    if (i === 0) return;
    const num = Math.floor(Math.random()*9) + 1;
    const index = Math.floor(Math.random()*80) + 1;
    currBoard.setCellValue(cell[index].id, num);
    const board = JSON.stringify(currBoard.board)
    if(isValidSudoku(JSON.parse(board))){
        cell[index].innerHTML = num;
        i--
    }else{
        currBoard.setCellValue(cell[index].id, '.');
    }
    return generateBoard(i)
}


const setCellId = (box, pos)=>{
    let col, row;
    if (box === 0 || box === 3 || box === 6) {
        console.log('AHEREH');
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



const addCellsRef = () =>{
    for(let index in cell){
        const box = Math.floor(index / 9)
        const pos = Math.floor(index % 9)
        cell[index].id = setCellId(box, pos)
        const c = cell[index]
        try{
            c.addEventListener('click',()=>addNumber(index))
        }catch{
            console.log(index);
        }
    }
}
const getNumber = async() =>{
    return prompt('enter num')
}
const addNumber = async (index)=>{    
    const num = await getNumber()
    cell[index].innerHTML = num
    currBoard.setCellValue(cell[index].id, num)
}


addCellsRef()
generateBoard()


const board = JSON.stringify(currBoard.board)
console.log(board)
console.log(isValidSudoku(JSON.parse(board)))

