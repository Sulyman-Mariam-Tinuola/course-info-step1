const Statistics = ({good, bad, neutral, positive, average, all}) => { 
    return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
  
</div>)
}
export default Statistics
