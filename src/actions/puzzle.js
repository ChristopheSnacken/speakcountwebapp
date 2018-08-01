

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
    for (i=0; i<=number-1; i++){
      Narray.push(i)
    }
    return Narray
  }
  
  function shuffle(a) {
    let j, x, i;
    for (i = a.length ; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
const gettingValue = (A)=>{
  const number = A.slice()

  return number
}

  export const newPuzzle=(size) => (dispatch)=> {
    const width=fullChecker(size)
    const length = size/width
    const fullArray = arrayMaker(size)
    const shuffleArray = shuffle(fullArray)
    console.log("shuffle", fullArray)
  //  const create = (amount) => new Array(amount).fill({id:shuffleArray.slice(1), color:'white'});
  //  const matrix = (rows, cols) => create(cols).map((o, i) => create(rows))
  let arr = Array(length).fill("0").map((x) => Array(width).fill({color:"white"}))
   dispatch(makePuzzle( arr) )

 //return matrix(width,length);
}

