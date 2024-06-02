



export default function validateBoard(board) {
    
    const rowsList = [];
    const collumsList = [];
    const blocksList = new Array(9);

    for(let row = 0; row < 9; row++){
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
       console.log(blocksList, currRow)

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

/*
   0 [x, x, x,| x, x, x,| x, x, x],
   1 [x, 3, x,| x, x, x,| x, x, x],
   2 [x, x, x,| x, x, x,| x, x, x],

   3 [x, 2, x,| x, x, x,| x, x, x],
   5 [x, 5, x,| x, x, x,| x, x, x],
   4 [x, x, x,| x, x, x,| x, x, x],

   6 [x, x, x,| x, x, x,| x, x, x],
   7 [x, 3, x,| x, x, x,| x, x, x],
   8 [x, x, x,| x, x, x,| x, x, x],

    Indice        da subArray => linha;
    Indice dentro da subArray => coluna;
    o Numero 3, está na linha 7 coluna dois. OU . board[7[2]]
    Cada bloco é representado por um conjunto de 3 linhas + 3 colunas;


    primeiro bloco  = 0 [0~2] ~ 2 [0~2]
    segundo  bloco  = 0 [3~5] ~ 2 [3~5]
    terceiro bloco  = 0 [6~8] ~ 2 [6~8]

    quarto   bloco  = 3 [0~2] ~ 5 [0~2]
    quinto   bloco  = 3 [3~5] ~ 5 [3~5]
    sexto    bloco  = 3 [6~8] ~ 5 [6~8]

    ...
*/