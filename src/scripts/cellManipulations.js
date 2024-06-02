import validateBoard from "./boardValidator"

export const retrieveImageFromValue = (value, index) =>{
    const imgElement = document.createElement('img')
    imgElement.id = index
    imgElement.src = `images/${value}.png`
    return imgElement
}


const promptForNumber = async() =>{
    const divElement = document.createElement('div')
    divElement.id = 'images'

    let res = new Promise(resolve =>{
        for(let i=1;i<10;i++){
            const imgDivElement = document.createElement('div')
            imgDivElement.id = i;
            imgDivElement.appendChild(retrieveImageFromValue(i))
            imgDivElement.addEventListener('click',  async()=>{
                document.getElementById('main').removeChild(divElement)
                resolve(i)
            })
            divElement.appendChild(imgDivElement)
        }
    })
    document.getElementById('main').appendChild(divElement)
    return res

}

export const changeCellValue = async (index, cellsElements)=>{    
    const num = await promptForNumber()
    console.log('returned')
    if(cellsElements[index].children.length == 0){
        cellsElements[index].appendChild( retrieveImageFromValue(num, index))
        
    }else{
        cellsElements[index].removeChild(cellsElements[index].childNodes[0])
        cellsElements[index].appendChild( retrieveImageFromValue(num, index) )
    }
    currBoard.setCellValue(cellsElements[index].id, num)
}


