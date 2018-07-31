

export const MAKE_PUZZLE = 'MAKE_PUZZLE'
export const GET_PIECE = 'GET_PIECE'


export const makePuzzle = (puzzle) => {
    return{
        type:MAKE_PUZZLE,
        payload:puzzle
    }
  }

export const  getPiece = (piece) =>{
   return{
        type: GET_PIECE,
        payload: piece
    }
}


const numberChecker = (fullNumber, divider)=>{
    const checker = fullNumber/divider
    return Number.isInteger(checker)
  }
  
  const fullChecker = (number)=>{
    let diverderArray=[]
    let i = 0
    for (i=0; i<=number; i++){
      if(numberChecker(number,i) ===true)diverderArray.push(i)
    }
    let width=diverderArray[Math.round((diverderArray.length - 1) / 2)];
    return  width
  }
  
  const arrayMaker = (number)=>{
    let Narray=[]
    let i = 0
    for (i=0; i<=number; i++){
      Narray.push(i)
    }
    return Narray
  }
  
  export const newPuzzle=(size) => (dispatch)=> {
    const width=fullChecker(size)
    const length = size/width
    console.log("width", width, length)
   const create = (amount) => new Array(amount).fill('white');
   const matrix = (rows, cols) => create(cols).map((o, i) => create(rows))
 
   dispatch(makePuzzle( matrix(width,length)) )

 return matrix(width,length);
}

