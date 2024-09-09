import { useEffect, useState } from "react";

function App() {
  const [circleCount,setCircleCount] = useState(0);
  const [crossCount,setCrossCount] = useState(0);
  const [idTrack,setIdTrack] = useState([null,null,null,null,null,null,null,null,null]);
  const [result,setResult] = useState(null);
  const [isCircle,setIsCircle] = useState(true);
  const circleImg = document.createElement('img');
  circleImg.src = '/images/circle.png';
  const crossImg = document.createElement('img');
  crossImg.src = '/images/close.png';

//   document.addEventListener('click',(e)=>{
//     if(e.target.id){
//       const id = document.getElementById(e.target.id);
//       id.innerHTML = "";
//       id.appendChild(isCircle?circleImg:crossImg);
//       setIsCircle((prev)=>(!prev))
//     }
// })
function handleClick(e){
    const id = document.getElementById(e.target.id);
    id.innerHTML = "";
    id.appendChild(isCircle?circleImg:crossImg);
    setIdTrack((prev)=>{
      const newArr = [...prev];
      newArr[e.target.id] = isCircle;
      return newArr; 
})
    setIsCircle((prev)=>(!prev));
}

const toReset = document.querySelectorAll('.toReset');
function handleReset(){
 toReset.forEach((div)=>{
  div.innerHTML="";
 })
 setIdTrack([null,null,null,null,null,null,null,null,null])
 setResult(null);
}

function handleNewGame(){
  handleReset();
  setCircleCount(0);
  setCrossCount(0);
}


useEffect(()=>{
  if(idTrack[0]==idTrack[1] && idTrack[1]==idTrack[2] && idTrack[0]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
    idTrack[0]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  }
  else if(idTrack[3]==idTrack[4] && idTrack[4]==idTrack[5] && idTrack[5]!=null){
    setResult(`${idTrack[3]?"circle":"cross"} wins`);
    idTrack[3]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[6]==idTrack[7] && idTrack[7]==idTrack[8] && idTrack[8]!=null){
    setResult(`${idTrack[6]?"circle":"cross"} wins`);
    idTrack[6]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[0]==idTrack[4] && idTrack[4]==idTrack[8] && idTrack[8]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
    idTrack[0]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[6]==idTrack[4] && idTrack[4]==idTrack[2] && idTrack[4]!=null){
    setResult(`${idTrack[6]?"circle":"cross"} wins`);
    idTrack[6]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[0]==idTrack[3] && idTrack[3]==idTrack[6] && idTrack[0]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
    idTrack[0]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[1]==idTrack[4] && idTrack[4]==idTrack[7] && idTrack[7]!=null){
    setResult(`${idTrack[1]?"circle":"cross"} wins`);
    idTrack[1]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  } 
  else if(idTrack[2]==idTrack[5] && idTrack[5]==idTrack[8] && idTrack[8]!=null){
    setResult(`${idTrack[5]?"circle":"cross"} wins`);
    idTrack[5]?setCircleCount(prev=>prev+1):setCrossCount(prev=>prev+1);
  }  
},[idTrack]);
  
useEffect(()=>{

},[result])

  return (
    <>
      <div className="flex justify-center">
      <div className="w-max bg-gray-800 m-6 rounded-md px-6">
       <h1 className="py-9 text-5xl text-yellow-300">Tic Tac Toe</h1>
       <div className="py-5">
       <div className="flex justify-center row1 ">
        <div id="0" onClick={handleClick} className="toReset column1 border w-14 h-14"></div>
        <div id="1" onClick={handleClick} className="toReset column2 border w-14 h-14"></div>
        <div id="2" onClick={handleClick} className="toReset column3 border w-14 h-14"></div>
       </div>
       <div className="flex justify-center row2 ">
        <div id="3" onClick={handleClick} className="toReset column1 border w-14 h-14"></div>
        <div id="4" onClick={handleClick} className="toReset column2 border w-14 h-14"></div>
        <div id="5" onClick={handleClick} className="toReset column3 border w-14 h-14"></div>
       </div>
       <div className="flex justify-center row3 ">
        <div id="6" onClick={handleClick} className="toReset column1 border w-14 h-14"></div>
        <div id="7" onClick={handleClick} className="toReset column2 border w-14 h-14"></div>
        <div id="8" onClick={handleClick} className="toReset column3 border w-14 h-14"></div>
       </div>
       </div>
       <div className="text-center text-3xl pb-4 text-cyan-400">{result}</div>
      </div>

      </div>
      <div className="flex justify-center mb-6">
       <div className="w-max justify-center bg-slate-600 px-8 pb-2 rounded">
         <div className=" text-center text-gray-200 underline">
           SCORE
         </div>
        <div className="flex justify-center gap-16 text-2xl">
          <div className="text-teal-200">Circle: {circleCount}</div>
          <div className="text-teal-200">Cross: {crossCount}</div>
        </div>
       </div>
      </div> 

      {/* buttons */}
      <div className="flex justify-center">
       <div class="bg-gray-800 p-2 flex rounded-md w-max gap-8 px-8 py-4">
        <button onClick={handleNewGame}
        class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
          New Game
        </button>
        <button onClick={handleReset}
        class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          Reset
        </button>
       </div>
      </div>
    </>
  )
}

export default App
