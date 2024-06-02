

export default function validateBoard(board) {
    
    const setOfRows       = [];
    const setOfCollums    = [];
    const setOfQuadrants  = [[],[],[]];


    for(let rowReference = 0; rowReference < 9; rowReference++){
        const rowsTable      = {};
        const collumsTable   = {};
        
        for(let collumReference = 0; collumReference < 9; collumReference++){
            const rowItem        = board[rowReference][collumReference];
            const collumItem     = board[collumReference][rowReference];

            const quadrantRefX   = Math.floor((collumReference ) / 3);
            const quadrantRefY   = Math.floor((rowReference    ) / 3);
            const quadrantsTable = setOfQuadrants[quadrantRefY][quadrantRefX] === undefined ? {} : setOfQuadrants[quadrantRefY][quadrantRefX];
            
            if (rowItem != '.'){
                if(rowsTable[rowItem] == undefined){
                    rowsTable[rowItem] = collumReference;
                }else{
                    return false;
                }

                if(quadrantsTable[rowItem] == undefined){
                    quadrantsTable[rowItem] = [rowReference, collumReference];
                    setOfQuadrants[quadrantRefY][quadrantRefX] = {...quadrantsTable};
                }else{
                    return false;
                }

            }

            if(collumItem != '.'){
                if(collumsTable[collumItem] == undefined){
                    collumsTable[collumItem] = rowReference;
                }else{
                    return false;
                }
            }
        }
        setOfCollums.push(collumsTable);
        setOfRows.push(rowsTable);
    }

    return true
}



    //  zero      um       dois

/*    0  1  2   3  4  5   6  7  8
   0 [x, x, x,| x, x, x,| x, x, x],   
   1 [x, 3, x,| x, x, x,| x, x, x],     zero
   2 [x, x, x,| x, x, x,| x, x, x],

   3 [x, 2, x,| x, x, x,| x, x, x],
   5 [x, 5, x,| x, x, x,| x, x, x],     um
   4 [x, x, x,| x, x, x,| x, x, x],

   6 [x, x, x,| x, x, x,| x, x, x],
   7 [x, 3, x,| x, x, x,| x, x, x],     dois
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

