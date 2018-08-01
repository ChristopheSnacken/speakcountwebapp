

export const MAKE_PUZZLE = 'MAKE_PUZZLE'
export const GET_PIECE = 'GET_PIECE'


export const makePuzzle = (puzzle) => {
    return{
        type:MAKE_PUZZLE,
        payload:puzzle
    }
  }

export const  getPiece = (puzzle) =>{
   return{
        type: GET_PIECE,
        payload: puzzle
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
    for (i=0; i<number; i++){
      Narray.push(i)
    }
    return Narray
  }
  
  function shuffle(a) {
    let j, x, i;
    for (i = a.length-1 ; i >= 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


  export const newPuzzle=(size) => (dispatch)=> {
    const width=fullChecker(size)
    const length = size/width
    const fullArray = arrayMaker(size)
    const shuffleArray = shuffle(fullArray)

  let arr = Array(length).fill("0").map(() => Array(width).fill({color:"white"}))
  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].length;j++){
      arr[i][j]={
        ...arr[i][j],
        id:shuffleArray.shift()
      }
    }
}
  dispatch(makePuzzle( arr) )
}


///////////////////////////////////////////////////////
export const changePuzzle = (puzzle, id) => (dispatch)=> {

const test = puzzle.map((row)=> row.map((cel)=> {if(cel.id===id){return {id:id, color:"yellow"}}else{ return cel }} ) )

console.log(test)
dispatch(makePuzzle( test) )
}


