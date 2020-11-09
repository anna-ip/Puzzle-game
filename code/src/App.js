import './App.css';

const App = () => {
   // Add number of bricks
   let noOfBricks = 15;
   console.log(noOfBricks);
 
   //Total number of bricks in an array
   const totalNoOfBricks = [...Array(noOfBricks + 1).keys()];
   console.log("total Numbers of Bricks", totalNoOfBricks);
 
   //Shuffle numbers in array => this will go into a button function

   const shuffle = (totalNoOfBricks) => {
     let currentIndex = totalNoOfBricks.length,
       temporaryValue,
       randomIndex;
     // While there remain elements to shuffle...
     while (0 !== currentIndex) {
       // Pick a remaining element...
       randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
 
       // And swap it with the current element.
       temporaryValue = totalNoOfBricks[currentIndex];
       totalNoOfBricks[currentIndex] = totalNoOfBricks[randomIndex];
       totalNoOfBricks[randomIndex] = temporaryValue;
     }
     return totalNoOfBricks;
   }
   shuffle(totalNoOfBricks);
   console.log("Shuffled array", totalNoOfBricks);
 


   //make it into a number of arrays
   let splicedArray = [];
   while (totalNoOfBricks.length) {
     splicedArray.push(totalNoOfBricks.splice(0, 4));
   }
   console.log("SplicedArray", splicedArray);
 
   //check if the number(btn) is next to or above or under 0 and then switch place
   let newOrder = [];
   const moveBricks = () => {
     //check if brick is next to 0
   };
   console.log(newOrder);
 
   return (
     <div className="container">
       <h1>Puzzle</h1>
     
       <div className="board-box">
         {splicedArray.map((arrays) =>
           arrays.map((number) => (
             <button key="numbers" className="brick">
               {number}
             </button>
           ))
         )}
       </div>
       <div>
         
         <button onClick={()=> {}} >Shuffle</button>
         </div>
     </div>
   );
 }


export default App;
