import { useEffect, useState } from "react";

function App() {
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
    setIsCircle((prev)=>(!prev));
    setIdTrack((prev)=>{
      const newArr = [...prev];
      newArr[e.target.id] = isCircle;
      return newArr; 
})
}

useEffect(()=>{
  if(idTrack[0]==idTrack[1] && idTrack[1]==idTrack[2] && idTrack[0]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
  }
  else if(idTrack[3]==idTrack[4] && idTrack[4]==idTrack[5] && idTrack[5]!=null){
    setResult(`${idTrack[3]?"circle":"cross"} wins`);
  } 
  else if(idTrack[6]==idTrack[7] && idTrack[7]==idTrack[8] && idTrack[8]!=null){
    setResult(`${idTrack[6]?"circle":"cross"} wins`);
  } 
  else if(idTrack[0]==idTrack[4] && idTrack[4]==idTrack[8] && idTrack[8]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
  } 
  else if(idTrack[6]==idTrack[4] && idTrack[4]==idTrack[2] && idTrack[4]!=null){
    setResult(`${idTrack[6]?"circle":"cross"} wins`);
  } 
  else if(idTrack[0]==idTrack[3] && idTrack[3]==idTrack[6] && idTrack[0]!=null){
    setResult(`${idTrack[0]?"circle":"cross"} wins`);
  } 
  else if(idTrack[1]==idTrack[4] && idTrack[4]==idTrack[7] && idTrack[7]!=null){
    setResult(`${idTrack[1]?"circle":"cross"} wins`);
  } 
  else if(idTrack[2]==idTrack[5] && idTrack[5]==idTrack[6] && idTrack[6]!=null){
    setResult(`${idTrack[5]?"circle":"cross"} wins`);
  }  
},[idTrack]);
  

  return (
    <>
      <div className="flex justify-center">
      <div className="w-max bg-red-900 m-6 rounded-md px-6">
       <h1 className="py-9 text-5xl ">Tic Tac Toe</h1>
       <div className="py-5">
       <div className="flex justify-center row1 ">
        <div id="0" onClick={handleClick} className="column1 border w-14 h-14"></div>
        <div id="1" onClick={handleClick} className="column2 border w-14 h-14"></div>
        <div id="2" onClick={handleClick} className="column3 border w-14 h-14"></div>
       </div>
       <div className="flex justify-center row2 ">
        <div id="3" onClick={handleClick} className="column1 border w-14 h-14"></div>
        <div id="4" onClick={handleClick} className="column2 border w-14 h-14"></div>
        <div id="5" onClick={handleClick} className="column3 border w-14 h-14"></div>
       </div>
       <div className="flex justify-center row3 ">
        <div id="6" onClick={handleClick} className="column1 border w-14 h-14"></div>
        <div id="7" onClick={handleClick} className="column2 border w-14 h-14"></div>
        <div id="8" onClick={handleClick} className="column3 border w-14 h-14"></div>
       </div>
       </div>
       <div className="text-center text-3xl">result:{result}</div>
      </div>
      </div>
    </>
  )
}

export default App
