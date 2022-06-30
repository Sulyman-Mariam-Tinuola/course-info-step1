
import Statistics from "./Statistics"
import React, {useState} from "react";
 const App = ()=> {
  const [good, setGood]= useState(0)
  const [neutral, setNeutral]=useState(0)
  const [bad, setBad]=useState(0)
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = `${(good + bad)*100} %`
  
  
  return (
    <div>
      <h1>give feedback</h1>
      
      <button onClick ={()=> setGood(good + 1)}>good</button>
      <button  onClick ={()=> setNeutral(neutral + 1)}>neutral</button>
      <button onClick={()=> setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      
      {all ?<Statistics good={good} bad = {bad} neutral = {neutral} positive = {positive} average = {average} all = {all}/> : "No feedback given"}



    </div>
  );
}
export default App;
